import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./FormStyles.css";
import "./Registro.css"; 
//esto esta incompleto
const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
 // const [rol, setRol] = useState("");
  const [extraFields, setExtraFields] = useState({});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    //setRol(e.target.value);
    setExtraFields({});
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!user || !password ) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const userData = { user, password, ...extraFields };
    console.log("Datos enviados:", userData);

    try {
      // Llamada a la API de registro
      const response = await fetch("http://localhost:8000/api/users/register", { // Reemplaza con tu URL real
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Usuario registrado correctamente"); // Mostrar mensaje de éxito
        alert("Usuario registrado exitosamente");
        setError("");

        // Redirigir al login o a la página de inicio según el rol
        if (user === "vendedor") {
          navigate("/vendedor"); // Redirige a la pantalla de administrador
        } else if (user === "comprador") {
          navigate("/comprador"); // Redirige a la pantalla de alumno
        }
      } else {
        setError(data.message || "Error al registrar usuario.");
        alert("Datos incorrectos,intente de nuevo");
        setSuccessMessage(""); // Limpiar mensaje de éxito si hubo un error

      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      setError("Error al conectar con el servidor.");
      setSuccessMessage(""); // Limpiar mensaje de éxito si hubo un error
    }
  };

  const Cancelar = () => {
    navigate("/"); // Redirige a la página principal
  };

  const Regresar = () => {
    navigate("/"); // Redirige a la página anterior
  };

  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={rol} onChange={handleRoleChange}>
          <option value="">Selecciona un rol</option>
          <option value="administrativo">Administrativo</option>
          <option value="alumno">Alumno</option>
        </select>

        {rol === "administrativo" && (
          <>
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) =>
                setExtraFields((prev) => ({ ...prev, nombre: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Apellido Paterno"
              onChange={(e) =>
                setExtraFields((prev) => ({
                  ...prev,
                  apellidoPaterno: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Apellido Materno"
              onChange={(e) =>
                setExtraFields((prev) => ({
                  ...prev,
                  apellidoMaterno: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Número de Teléfono"
              onChange={(e) =>
                setExtraFields((prev) => ({
                  ...prev,
                  telefono: e.target.value,
                }))
              }
            />
          </>
        )}

        <button type="submit">Guardar</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <button onClick={Cancelar}>Cancelar</button>
      <button onClick={Regresar}>Regresar</button>
    </div>
  );
};

export default Register;
