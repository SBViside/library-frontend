import cls from "./Loader.module.scss";

const Loader = (props) => {
  return (
    <div className={cls.modernLoader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
