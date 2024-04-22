import { useState } from "react";

const Auth = () => {
  // States för att hantera inputs för användarnamn och password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hantera inloggning medd Google konto
  const signInWithGoogle = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  // Hantera regestrering av egenskapad användare
  const handleCreateUser = async () => {
    try {
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  // Hantera inloggning med egenskapad användare
  const handleSignIn = async () => {
    try {
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  // Logga ut från både egenskapad och Google
  const logOut = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1>Authentication Page</h1>
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
