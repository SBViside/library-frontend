import { useState } from "react";
import axios from "axios";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

function ChangePassword({ userID, setModal, ...props }) {
  const [passwords, setPasswords] = useState({ old: "", new: "" });

  const confirm = () => {
    console.log("IT IS NOT READY YET!");
    setModal(false);
  };

  return (
    <div className="profile__changepass" {...props}>
      <h1>Изменение пароля</h1>
      <Input
        type="password"
        placeholder="Старый пароль"
        value={passwords.old}
        onChange={(e) => setPasswords({ ...passwords, old: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Новый пароль"
        value={passwords.new}
        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
        style={{ margin: "5px 0 10px" }}
      />
      <Button onClick={confirm}>Применить</Button>
    </div>
  );
}

export default ChangePassword;
