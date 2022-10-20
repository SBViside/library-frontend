import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import CustomSelect from "./UI/select/Select";
import { EMAIL_REGEXP } from "../utils/variables";
import UserController from "../controller/UserController";

function RegistrationTab({
  registrationInputs,
  setRegistrationInputs,
  setLogined,
  ...props
}) {
  const warn = useRef();
  const navigate = useNavigate();

  const registration = async (e) => {
    if (!(checkLength() && checkPasswords() && checkEmail())) return;

    const exist = await UserController.userExist(registrationInputs.email);

    if (exist) {
      setRegistrationInputs({ ...registrationInputs, email: "" });
      warn.current.style.visibility = "visible";
      return;
    }

    const newUser = await UserController.sendUser(registrationInputs);
    console.log(newUser);

    setLogined({ email: registrationInputs.email, admin: false });
    window.scrollTo(0, 0);
    navigate("/books");
  };

  const checkPasswords = () => {
    if (registrationInputs.pass1 !== registrationInputs.pass2) {
      alert("Пароли не совпадают. Повторите попытку.");
      setRegistrationInputs({ ...registrationInputs, pass2: "" });
      return false;
    }
    return true;
  };
  const checkLength = () => {
    if (
      registrationInputs.surname.length &&
      registrationInputs.name.length &&
      registrationInputs.gender.length
    ) {
      return true;
    }
    alert("Не все поля заполнены.");
    return false;
  };
  const checkEmail = () => {
    return EMAIL_REGEXP.test(registrationInputs.email);
  };

  const setEmail = (e) => {
    if (checkEmail()) e.target.style.borderColor = "green";
    else e.target.style.borderColor = "red";
    setRegistrationInputs({
      ...registrationInputs,
      email: e.target.value,
    });
  };

  return (
    <div className="login__page_2" {...props}>
      <div className="login__inputs">
        <h1>Ваши данные:</h1>
        <div className="login__input">
          <Input
            id="surname"
            type="text"
            placeholder="Фамилия"
            value={registrationInputs.surname}
            onChange={(e) =>
              setRegistrationInputs({
                ...registrationInputs,
                surname: e.target.value,
              })
            }
          />
        </div>
        <div className="login__input">
          <Input
            id="name"
            type="text"
            placeholder="Имя"
            value={registrationInputs.name}
            onChange={(e) =>
              setRegistrationInputs({
                ...registrationInputs,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="login__input" style={{ marginBottom: "10px" }}>
          <Input
            id="patronymic"
            type="text"
            placeholder="Отчество (необязательно)"
            value={registrationInputs.patronymic}
            onChange={(e) =>
              setRegistrationInputs({
                ...registrationInputs,
                patronymic: e.target.value,
              })
            }
          />
        </div>
        <CustomSelect
          name="gender"
          isSearchable={false}
          isClearable={false}
          placeholder="Ваш пол"
          options={[
            { value: "M", label: "Мужской" },
            { value: "F", label: "Женский" },
          ]}
          onChange={(e) =>
            setRegistrationInputs({
              ...registrationInputs,
              gender: e.value,
            })
          }
        />
        <h1 style={{ marginTop: "30px" }}>E-Mail и пароль:</h1>
        <div className="login__input">
          <Input
            id="reg_email"
            type="email"
            placeholder="Электронная почта"
            value={registrationInputs.email}
            onChange={setEmail}
          />
        </div>
        <div className="login__input">
          <Input
            id="reg_pass_1"
            type="password"
            placeholder="Пароль"
            value={registrationInputs.pass1}
            onChange={(e) =>
              setRegistrationInputs({
                ...registrationInputs,
                pass1: e.target.value,
              })
            }
          />
        </div>
        <div className="login__input">
          <Input
            id="reg_pass_2"
            type="password"
            placeholder="Подтверждение пароля"
            value={registrationInputs.pass2}
            onChange={(e) =>
              setRegistrationInputs({
                ...registrationInputs,
                pass2: e.target.value,
              })
            }
          />
        </div>
        <div className="login__input">
          <p className="warn" ref={warn}>
            Пользователь с таким E-Mail уже существует
          </p>
        </div>
      </div>
      <div className="login__buttons">
        <Button id="register" onClick={registration}>
          Зарегестрироваться
        </Button>
      </div>
    </div>
  );
}

export default RegistrationTab;
