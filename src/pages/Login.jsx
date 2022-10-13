import { useContext, useState, useRef } from "react";
import { loginContext } from "../context/loginContext";
import LoginTab from "../components/LoginTab";
import RegistrationTab from "../components/RegistrationTab";

function Login() {
  const logContext = useContext(loginContext);

  const setLogined = logContext.setLogined;
  const [logTab, setLogTab] = useState(true);

  const [loginInputs, setLoginInputs] = useState({ email: "", pass: "" });
  const [registrationInputs, setRegistrationInputs] = useState({
    surname: "",
    name: "",
    patronymic: "",
    gender: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  return (
    <div className="login container">
      <div className="login__content">
        <div className="login__tabs">
          <div
            className={logTab ? "selected" : ""}
            onClick={(e) => setLogTab(true)}
          >
            Вход на сайт
          </div>
          <div
            className={!logTab ? "selected" : ""}
            onClick={(e) => setLogTab(false)}
          >
            Регистрация
          </div>
        </div>
        <LoginTab
          loginInputs={loginInputs}
          setLoginInputs={setLoginInputs}
          setLogined={setLogined}
          style={{ display: logTab ? "block" : "none" }}
        />
        <RegistrationTab
          registrationInputs={registrationInputs}
          setRegistrationInputs={setRegistrationInputs}
          setLogined={setLogined}
          style={{ display: !logTab ? "block" : "none" }}
        />
      </div>
    </div>
  );
}

export default Login;
