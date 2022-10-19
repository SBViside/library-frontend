import { useState, useContext } from "react";
import { loginContext } from "../context/loginContext";
import useFetch from "../hooks/useFetch";
import UserController from "../controller/UserController";

function Profile() {
  const { logined, setLogined } = useContext(loginContext);

  const [user, setUser] = useState({});
  const [userLoading, getUser, userError] = useFetch(async () => {
    const response = await UserController.getUser(logined.email);
    setUser(response);
  });

  return (
    <div className="profile container">
      <h1>Ваш профиль</h1>
      <div className="profile__content"></div>
    </div>
  );
}

export default Profile;
