import axios from "axios";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import Select from "react-select";

function RegistrationTab({
  registrationInputs,
  setRegistrationInputs,
  ...props
}) {
  const registration = (e) => {};

  return (
    <div className="login__page_2" {...props}>
      <div className="login__inputs">
        <h1>Ваши данные:</h1>
        <div className="login__input">
          <Input id="surname" type="text" placeholder="Фамилия" />
        </div>
        <div className="login__input">
          <Input id="name" type="text" placeholder="Имя" />
        </div>
        <div className="login__input">
          <Input
            id="patronymic"
            type="text"
            placeholder="Отчество (необязательно)"
          />
        </div>
        <h1>Ваш пол:</h1>
        <Select
          name="gender"
          isSearchable={false}
          isClearable={false}
          placeholder="Ваш пол"
          options={[
            { value: "male", label: "Мужской" },
            { value: "female", label: "Женский" },
          ]}
          className="select"
          //   styles={{
          //     option: (provided, state) => ({
          //       ...provided,
          //       color: state.isSelected ? "white" : "black",
          //       backgroundColor: state.isSelected ? "orange" : "white",
          //       padding: "5px 10px",
          //     }),
          //     control: (provides, state) => ({
          //       ...provides,
          //       //   borderColor: state.menuIsOpen ? "orange" : "gray",
          //       borderColor: state.isFocused ? "orange" : "orange",
          //     }),
          //     singleValue: (provided, state) => ({
          //       ...provided,
          //       fontWeight: "700",
          //     }),
          //   }}
        />
        <h1 style={{ marginTop: "30px" }}>E-Mail и пароль:</h1>
        <div className="login__input">
          <Input id="reg_email" type="text" placeholder="Электронная почта" />
        </div>
        <div className="login__input">
          <Input id="reg_pass_1" type="password" placeholder="Пароль" />
        </div>
        <div className="login__input">
          <Input
            id="reg_pass_2"
            type="password"
            placeholder="Подтверждение пароля"
          />
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
