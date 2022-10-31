import { GiArchiveResearch } from "react-icons/gi";
import { useEffect } from "react";

function NotFound(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
