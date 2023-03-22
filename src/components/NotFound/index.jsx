import "./style.scss";
import Shape3 from "../../assets/svg/Shape3.svg";
import ShapeOutlined from "../../assets/svg/ShapeOutlined.svg";

const NotFound = () => {
  return (
    <main>
      <div className="main-section">
        <div className="shapes">
          <img className="shape" src={Shape3} alt="" />
          <img className="shape outlined" src={ShapeOutlined} alt="" />
        </div>
        <h1 className="title">ERR 404</h1>
        <h2 className="subtitle">La seccion que buscas no existe</h2>
      </div>
    </main>
  );
};

export default NotFound;
