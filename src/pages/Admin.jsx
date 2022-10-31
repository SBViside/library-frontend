import "../styles/Admin.scss";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tables, setTables] = useState([
    { id: 1, name: "заказы" },
    { id: 2, name: "книги" },
    { id: 3, name: "авторы" },
    { id: 4, name: "жанры" },
    { id: 5, name: "пользователи" },
  ]);
  const [index, setIndex] = useState(tables[0].id);
  const [database, setDatabase] = useState([]);

  const [dbLoading, getDatabase, dbError] = useFetch(async () => {
    let url = "";

    switch (index) {
      case 1:
        url = "/admin/orders/1234";
        break;
      case 2:
        url = "/admin/books/1234";
        break;
      case 3:
        url = "/admin/authors/1234";
        break;
      case 4:
        url = "/admin/genres/1234";
        break;
      case 5:
        url = "/admin/users/1234";
    }
    const response = await axios.get(url);
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
                checked={t.id === index}
                onChange={(e) => setIndex(t.id)}
              />
              <label htmlFor={t.name}>{t.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
