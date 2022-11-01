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
    console.log(response.data);
  });

  useEffect(() => {
    getOrders();
  }, []);

  if (!ordersLoading && !orders.length)
    return (
      <div className="orders">
        <hr />
        <h1 style={{ margin: "10px 0" }}>У вас пока нет заказов</h1>
        <hr />
      </div>
    );

  return ordersLoading ? (
    <h1></h1>
  ) : (
    <div className="orders">
      <hr />
      <h1 className="caption">Список ваших заказов</h1>
      <div className="orders__content">
        {orders.map((o) => (
          <OrderItem key={o.id} order={o} />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default OrdersCard;
