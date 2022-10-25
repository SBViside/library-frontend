import cls from "./Modal.module.scss";

function Modal({ modal, setModal, children, ...props }) {
  if (!modal) return null;

  const stopModal = () => {
    setModal(false);
  };

  return (
    <div className={cls.main} onClick={stopModal}>
      <div className={cls.mainContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
