import React, { useState } from "react";
import "./Login.css"; // Asegúrate de que el archivo de estilos esté en la misma ubicación
import logo from "../../img/logo.png";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" /> {/* Cambia "logo.png" por la ruta de tu logo */}
        </div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input
              type="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

  