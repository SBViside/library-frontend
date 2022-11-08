import { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { loginContext } from "../context/loginContext";
import OrderItem from "./OrderItem";

function OrdersCard(props) {
  const { logined } = useContext(loginContext);

  const [orders, setOrders] = useState([]);
  const [ordersLoading, getOrders, ordersError] = useFetch(async () => {
    const response = await axios.get(`/user/orders/${logined.id}`);
    setOrders(response.data);
  });

  useEffect(() => {
    getOrders();
  }, []);

  const cancelTheOrder = (order) => {
    if (window.confirm("Отменить заказ?"))
      axios
        .post("/order/cancel", { orderID: order.id, bookID: order.book_id })
        .then((result) => {
          if (result.data === "done") getOrders();
        });
  };

  if (!logined.email)
    return (
      <div className="orders">
        <hr />
        <h1 className="nothing">Вы не вошли в аккаунт</h1>
        <hr />
      </div>
    );

  if (!ordersLoading && !orders.length)
    return (
      <div className="orders">
        <hr />
        <h1 className="nothing">У вас пока нет заказов</h1>
        <hr />
      </div>
    );

  return (
    <div className="orders">
      <hr />
      <h1 className="caption">Список ваших заказов</h1>
      <div className="orders__content">
        {ordersLoading
          ? null
          : orders.map((o) => (
              <OrderItem key={o.id} order={o} cancelTheOrder={cancelTheOrder} />
            ))}
      </div>
      <hr />
    </div>
  );
}

export default OrdersCard;
