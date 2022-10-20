import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "./UI/checkbox/Checkbox";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

function LoginTab({ loginInputs, setLoginInputs, setLogined, ...props }) {
  const warn = useRef();
  const navigate = useNavigate();

  const login = (e) => {
    checkCustomer();
  };

  const checkCustomer = async () => {
    const response = await axios.post("/user", loginInputs);

    if (!response.data.exist) {
      setLoginInputs({ email: "", pass: "" });
      warn.current.style.visibility = "visible";
      return;
    }

    const user = { email: loginInputs.email, admin: response.data.admin };
    // DOM
    const remember = document.getElementById("remember").checked;
    if (remember) localStorage.setItem("user", JSON.stringify(user));

    setLogined(user);
    window.scrollTo(0, 0);
    navigate("/books");
  };

  return (
    <div className="login__page_1" {...props}>
      <div className="login__inputs">
        <div className="login__input">
          <Input
            id="email"
            type="text"
            placeholder="E-Mail"
            value={loginInputs.email}
            onChange={(e) =>
              setLoginInputs({ ...loginInputs, email: e.target.value })
            }
          />
        </div>
        <div className="login__input">
          <Input
            id="pass"
            type="password"
            placeholder="Password"
            value={loginInputs.pass}
            onChange={(e) =>
              setLoginInputs({ ...loginInputs, pass: e.target.value })
            }
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
  );
}

export default LoginTab;
