import React, { useState } from "react";
import { login } from "../../services/api";
import { All, Botao, Formulario, H2, Input, Input2, Main } from "./Login.styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false); 

    const response = await login(username, password);

    if (response.status == 200) {
      setSuccess(true);
      window.location.href = "/"
    } else {
      setError(response.message || "Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <Main >
      <All>
        <H2>Entrar</H2>
        <Formulario onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input2
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Botao type="submit">Login</Botao>
        </Formulario>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Login realizado com sucesso!
          </p>
        )}
      </All>
    </Main>
  );
}
