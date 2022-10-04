import cls from "./Checkbox.module.scss";

function Checkbox({ id, text, ...props }) {
  return (
    <div className={cls.checkbox} {...props}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default Checkbox;
