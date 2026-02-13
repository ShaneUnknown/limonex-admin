import { AtSign, KeyRound, Eye, EyeClosed } from "lucide-react";
import "../components/Login.css";
import { useRef, useState } from "react";

const Login = () => {
  const [hidden, setHidden] = useState(true);
  const [visiblePass, setVisiblePass] = useState("");
  const [hiddenPass, setHiddenPass] = useState("");

  const inputRef = useRef(null);

  const handleHidden = () => {
    if (navigator.vibrate) navigator.vibrate(1);
    setHidden(!hidden);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (navigator.vibrate) navigator.vibrate(1);
    console.log("Hello Submit");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1]?.focus();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setVisiblePass(value);
    const x = "×".repeat(value.length);
    setHiddenPass(x);
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h2>Limonex</h2>

      <div className="input-cont">
        <AtSign className="icon-l" />
        <textarea
          enterKeyHint="next"
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="email"
        ></textarea>
      </div>

      <div className="input-cont">
        <KeyRound className="icon-l" />
        <textarea
          value={hidden ? hiddenPass : visiblePass}
          enterKeyHint="next"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={1}
          ref={inputRef}
          placeholder="contraseña"
        ></textarea>
        {hidden ? (
          <EyeClosed onClick={handleHidden} className="icon-r" />
        ) : (
          <Eye onClick={handleHidden} className="icon-r" />
        )}
      </div>

      <button>Ingresar</button>
    </form>
  );
};

export default Login;
