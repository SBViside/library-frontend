import malePNG from "../assets/man.png";
import femalePNG from "../assets/woman.png";
import adminPNG from "../assets/admin.png";

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./UI/button/Button";
import useFetch from "../hooks/useFetch";
import Loader from "./UI/loader/Loader";
import { loginContext } from "../context/loginContext";
import ChangePassword from "./ChangePassword";

function ProfileCard({ ...props }) {
  const navigator = useNavigate();

  const { logined } = useContext(loginContext);

  const [passwordChange, setPasswordChange] = useState(false);

  const [user, setUser] = useState({});
  const [userLoading, getUser, userError] = useFetch(async () => {
    const response = await axios.get(`/user/info?email=${logined.email}`);
    setUser(response.data);
  });

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile__content" {...props}>
      {userLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="caption">
            {logined.admin
              ? `Учетная запись администратора`
              : `Ваша учетная запись`}
          </h1>
          <div className="profile__info">
            <div className="image">
              {logined.admin ? (
                <img src={adminPNG} alt="ERROR" />
              ) : (
                <img src={user.gender === "M" ? malePNG : femalePNG} alt="" />
              )}
            </div>
            <div className="profile__name">
              <div className="FIO">
                <p>
                  Фамилия: <span>{user.second_name}</span>
                </p>
                <p>
                  Имя: <span>{user.first_name}</span>
                </p>
                <p>
                  Отчество: <span>{user.patronymic}</span>
                </p>
              </div>
              <p className="gender">
                Пол: <span>{user.gender === "M" ? "мужской" : "женский"}</span>
              </p>
              <p className="email">
                E-Mail:
                <br />
                <span>{user.email}</span>
              </p>
              <p className="date">
                На сайте с{" "}
                {user.registration_date && user.registration_date.slice(0, 10)}
              </p>
            </div>
            <div className="profile__data">
              <div className="buttons">
                <Button
                  id="password"
                  onClick={() => setPasswordChange(!passwordChange)}
                >
                  Изменить пароль
                </Button>
                {passwordChange && <ChangePassword userID={user.id} />}
                <Button
                  id="logout"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Вы действительно хотите выйти из аккаунта?"
                      )
                    )
                      navigator("/logout");
                  }}
                >
                  Выйти из аккаунта
                </Button>
              </div>
            </div>
            <div className="number">№{user.id}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
