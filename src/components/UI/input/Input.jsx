import cls from "./Input.module.scss";

function Input(props) {
  return <input className={cls.input} {...props} />;
}

export default Input;
