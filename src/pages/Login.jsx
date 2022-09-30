import { useContext } from "react";
import { loginContext } from "../context/loginContext";
import Button from "../components/UI/button/Button";

function Login() {
  const logContext = useContext(loginContext);
  const [logined, setLogined] = [logContext.logined, logContext.setLogined];

  //   const login = (e) => {
  //   };

  return (
    <div className="login container">
      <div className="login__content">
        <h1 className="caption">Вход на сайт</h1>
        <div className="login__inputs">
          <div className="login__input">
            <span>E-Mail:</span>
            <input type="text" placeholder="email" />
          </div>
          <div className="login__input">
            <span>Пароль:</span>
            <input type="password" placeholder="password" />
          </div>
        </div>
        <div className="login__buttons">
          <Button>Войти</Button>
          <Button>Регистрация</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
