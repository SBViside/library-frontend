import cls from "./Modal.module.scss";
import { RiCloseCircleFill } from "react-icons/ri";

function Modal({ modal, setModal, children, ...props }) {
  if (!modal) return null;

  const stopModal = () => {
    setModal(false);
  };

  return (
    <div className={cls.main} onClick={stopModal}>
      <div className={cls.mainContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <RiCloseCircleFill onClick={() => setModal(false)} />
      </div>
    </div>
  );
}

export default Modal;
