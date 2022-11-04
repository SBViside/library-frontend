import "../styles/Admin.scss";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import BookTable from "../components/admin/BookTable";
import OrderTable from "../components/admin/OrderTable";
import Table from "../components/admin/Table";
import Loader from "../components/UI/loader/Loader";

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tables, setTables] = useState([
    { id: 1, name: "заказы", url: "/admin/orders/1234", element: OrderTable },
    { id: 2, name: "книги", url: "/admin/books/1234", element: BookTable },
    // {
    //   id: 3,
    //   name: "!!!авторы",
    //   url: "/admin/authors/1234",
    //   element: BookTable,
    // },
    // {
    //   id: 4,
    //   name: "!!!жанры",
    //   url: "/admin/genres/1234",
    //   element: BookTable,
    // },
    // {
    //   id: 5,
    //   name: "!!!пользователи",
    //   url: "/admin/users/1234",
    //   element: BookTable,
    // },
  ]);
  const [index, setIndex] = useState(1);
  const [database, setDatabase] = useState([]);

  const [dbLoading, getDatabase, dbError] = useFetch(async () => {
    const response = await axios.get(tables[index].url);
    setDatabase(response.data);
  });

  useEffect(() => {
    getDatabase();
  }, [index]);

  return (
    <div className="admin container">
      <h1 className="caption">Редактор базы данных</h1>
      <div className="admin__content">
        <div className="admin__tabs">
          {tables.map((t) => (
            <div key={t.id} className="admin__tab">
              <input
                type="radio"
                name="table"
                id={t.name}
                checked={t.id === index + 1}
                onChange={(e) => setIndex(t.id - 1)}
              />
              <label htmlFor={t.name}>{t.name}</label>
            </div>
          ))}
        </div>
        {dbLoading ? (
          <Loader />
        ) : (
          <Table
            Component={tables[index].element}
            table={database}
            updateTable={getDatabase}
          />
        )}
      </div>
    </div>
  );
}

export default Admin;
