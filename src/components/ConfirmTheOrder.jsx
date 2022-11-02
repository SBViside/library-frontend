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
    OrderController.createOrder(book_id, logined.id).then((result) => {
      if (result.data !== "limit") {
        navigator("/profile");
        return;
      }
      alert("Нельзя заказать больше 3 книг.");
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
