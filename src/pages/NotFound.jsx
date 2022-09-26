import { GiArchiveResearch } from "react-icons/gi";

function NotFound(props) {
  return (
    <div className="notFound container">
      <div className="picture">
        <GiArchiveResearch />
        <p>404</p>
      </div>
      <p>Страница не найдена...</p>
    </div>
  );
}

export default NotFound;