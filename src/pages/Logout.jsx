import { useEffect, useContext } from "react";
import { loginContext } from "../context/loginContext";
import { Navigate } from "react-router-dom";

function Logout() {
  const logContext = useContext(loginContext);
  const setLogined = logContext.setLogined;

  useEffect(() => {
    localStorage.removeItem("user");
    setLogined({ email: null, admin: false });
  });

  return <Navigate to="/login" />;
}

export default Logout;
