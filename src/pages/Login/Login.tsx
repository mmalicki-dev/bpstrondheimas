import { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Atoms/Logo/Logo";
import Input from "../../components/Atoms/Input/Input";
import Button from "../../components/Atoms/Button/Button";
import { useAuth } from "../../context/auth/useAuth";
import styles from "./Login.module.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    const pwd = formData.get("password") as string;
    setError("");

    startTransition(async () => {
      try {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: pwd }),
        });
        console.log("login befor data func");

        const data = (await res.json()) as { token?: string; error?: string };

        console.log("login after data func");
        if (!res.ok || !data.token) {
          setError(data.error ?? "Login failed");
          return;
        }

        login(data.token);
        console.log("loginend func");
        navigate("/");
      } catch (e) {
        console.log("loginerror func");
        console.log(e);
        setError("Could not connect to server");
      }
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Logo full />
        </div>

        <h1 className={styles.title}>Admin login</h1>

        <form action={handleSubmit} className={styles.form}>
          <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          <Button label={isPending ? "Logging in…" : "Log in"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
