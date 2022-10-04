import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../context/loginContext";
import Button from "../components/UI/button/Button";
import Checkbox from "../components/UI/checkbox/Checkbox";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const warn = useRef();

  const logContext = useContext(loginContext);
  const setLogined = logContext.setLogined;

  const [inputs, setInputs] = useState({ email: "", pass: "" });

  const login = (e) => {
    checkCustomer();
  };

  const checkCustomer = async () => {
    const response = await axios.post("/user", inputs);

    if (!response.data.exist) {
      setInputs({ email: "", pass: "" });
      warn.current.style.visibility = "visible";
      return;
    }

    const user = { email: inputs.email, admin: response.data.admin };

    localStorage.setItem("user", JSON.stringify(user));
    setLogined(user);

    navigate("/books");
  };

  return (
    <div className="login container">
      <div className="login__content">
        <h1 className="caption">Вход на сайт</h1>
        <div className="login__inputs">
          <div className="login__input">
            <input
              id="email"
              type="text"
              placeholder="E-Mail"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>
          <div className="login__input">
            <input
              id="pass"
              type="password"
              placeholder="Password"
              value={inputs.pass}
              onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
            />
          </div>
          <div className="login__input">
            <Checkbox id="remember" text="Запомнить меня" />
          </div>
          <div className="login__input">
            <p className="warn" ref={warn}>
              Неверный E-Mail или Пароль
            </p>
          </div>
        </div>

        <div className="login__buttons">
          <Button id="log_in" onClick={login}>
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
