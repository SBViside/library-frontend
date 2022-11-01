import { useNavigate } from "react-router-dom";

function Status({ issue_date, actual_date }) {
  if (issue_date && !actual_date) {
    return (
      <p className="status" style={{ color: "brown" }}>
        У клиента с {issue_date.slice(0, 10)}
      </p>
    );
  } else if (actual_date) {
    return (
      <p className="status" style={{ color: "green" }}>
        Возвращена({actual_date.slice(0, 10)})
      </p>
    );
  } else {
    return <p className="status">Ожидает клиента</p>;
  }
}

function OrderItem({ order, ...props }) {
  const navigator = useNavigate();

  const cancelTheOrder = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      key={order.id}
      className="orders__item"
      {...props}
      onClick={() => navigator(`/books/${order.book_id}`)}
    >
      <h1>{order.title}</h1>
      <img src={order.url} alt="ERROR" width={100} />
      <p>Дата оформления: {order.start_date.slice(0, 10)}</p>
      <p>Ожидаемая дата возврата: {order.expected_date.slice(0, 10)}</p>
      <Status issue_date={order.issue_date} actual_date={order.actual_date} />
      {!order.issue_date && <button onClick={cancelTheOrder}>Отменить</button>}
    </div>
  );
}

export default OrderItem;
