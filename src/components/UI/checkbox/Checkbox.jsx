import cls from "./Checkbox.module.scss";

function Checkbox({ id, text, ...props }) {
  return (
    <div className={cls.checkbox}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default Checkbox;
