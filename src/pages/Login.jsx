import { Mail, Lock, Eye, EyeClosed } from "lucide-react";
import icBottle from "../assets/ic_bottle.svg";
import "../components/Login.css";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [selected, setSelected] = useState(2);
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleHidden = () => {
    if (navigator.vibrate) navigator.vibrate(1);
    setHidden(!hidden);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (navigator.vibrate) navigator.vibrate(1);

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
    } catch (error) {
      setError("Error al iniciar sesión");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cssInput = (index) => {
    let css = "input-cont";

    if (index === selected) {
      css += " selected";
    }

    return css;
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="Login">
      <img src={icBottle} />
      <h2>Limonex</h2>
      <h3>Ingresa a tu cuenta para continuar.</h3>

      <form onSubmit={handleSubmit}>
        {error && <div className="modal-error">{error}</div>}

        <div className={cssInput(0)} onClick={() => setSelected(0)}>
          <Mail className="icon-l" />
          <input
            onFocus={() => setSelected(0)}
            onBlur={() => setSelected(2)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
        </div>

        <div className={cssInput(1)} onClick={() => setSelected(1)}>
          <Lock className="icon-l" />
          <input
            onFocus={() => setSelected(1)}
            onBlur={() => setSelected(2)}
            type={hidden ? "password" : "text"}
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {hidden ? (
            <EyeClosed onClick={handleHidden} className="icon-r" />
          ) : (
            <Eye onClick={handleHidden} className="icon-r" />
          )}
        </div>

        <button disabled={loading}>
          {loading ? "Verificando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;
