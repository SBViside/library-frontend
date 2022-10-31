import Button from "./UI/button/Button";
import OrderController from "../controller/OrderController";
import { GiBookmarklet } from "react-icons/gi";
import { useContext } from "react";
import { loginContext } from "../context/loginContext";
import { useNavigate } from "react-router-dom";

function ConfirmTheOrder({ book_id, ...props }) {
  const { logined } = useContext(loginContext);
  const navigator = useNavigate();

  const makeOrder = () => {
    OrderController.createOrder(book_id, logined.email).then((result) => {
      //   console.log(result);
      navigator("/profile");
    });
  };

  return (
    <div className="confirmTheOrder">
      <GiBookmarklet />
      <h1>Подтвердить заказ?</h1>
      <Button onClick={makeOrder}>Подтвердить</Button>
    </div>
  );
}

export default ConfirmTheOrder;
