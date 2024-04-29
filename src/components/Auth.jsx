import { useState } from "react";

import { db, auth, googleProvider } from "../app/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  // States för att hantera inputs för användarnamn och password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);

  const usersCollection = collection(db, "users");

  // Hantera inloggning medd Google konto
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  // Hantera regestrering av egenskapad användare
  const handleCreateUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(usersCollection, {
        authId: auth?.currentUser?.uid,
        email: email,
      });
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  // Hantera inloggning med egenskapad användare
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  // Logga ut från både egenskapad och Google
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1>Authentication Page</h1>
      {auth?.currentUser?.email ? (
        <p>Inloggad: {auth?.currentUser?.email}</p>
      ) : (
        <p>Inte inloggad</p>
      )}
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleCreateUser}>Create Account</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign in With Google</button>

      <button onClick={logOut}>Sign out</button>
    </main>
  );
};

export default Auth;
