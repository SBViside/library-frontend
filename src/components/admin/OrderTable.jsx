import Loader from "../UI/loader/Loader";
import { HiOutlineRefresh } from "react-icons/hi";
import OrderTableItem from "./OrderTableItem";
import axios from "axios";

function OrderTable({ table, updateTable, search, loading, ...props }) {
  const [orderSearch, setOrderSearch] = search;

  const cancelTheOrder = (row) => {
    if (window.confirm("Отменить заказ?"))
      axios
        .post("/order/cancel", {
          orderID: row.id,
          bookID: row.book_id,
        })
        .then((result) => {
          if (result.data === "done") updateTable();
        });
  };

  const confirmTheIssue = (row) => {
    if (window.confirm("Подтвердить выдачу?"))
      axios
        .post("/admin/orders/issue/1234", {
          orderID: row.id,
        })
        .then((result) => {
          if (result.data === "done") updateTable();
        });
  };

  const finishTheOrder = (row) => {
    if (window.confirm("Подтвердить возврат?"))
      axios
        .post("/admin/orders/confirm/1234", {
          orderID: row.id,
        })
        .then((result) => {
          if (result.data === "done") updateTable();
        });
  };

  return (
    <div className="admin__orderTable admin-table">
      <div className="controlls">
        <input
          type="search"
          value={orderSearch}
          onChange={(e) => setOrderSearch(e.target.value)}
          style={{ display: "block" }}
          placeholder="Поиск"
        />
        <button id="refresh" onClick={() => updateTable()}>
          <HiOutlineRefresh />
          Обновить
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : table.length ? (
        table.map((row) => (
          <OrderTableItem
            key={row.id}
            row={row}
            cancelTheOrder={cancelTheOrder}
            confirmTheIssue={confirmTheIssue}
            finishTheOrder={finishTheOrder}
          />
        ))
      ) : (
        <h1>Нет данных</h1>
      )}
    </div>
  );
}

export default OrderTable;
