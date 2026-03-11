import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-slate-400 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-200 p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="text-sm mb-6">
          Diese App ist geschuetzt. Bitte melde dich mit deinem Account an.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold">E-Mail</span>
            <input
              className="p-2 rounded border border-slate-400"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Passwort</span>
            <input
              className="p-2 rounded border border-slate-400"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </label>

          {error ? <p className="text-red-600 text-sm">{error}</p> : null}

          <button
            className="bg-slate-700 text-white py-2 rounded hover:opacity-90 disabled:opacity-60"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Anmelden..." : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
