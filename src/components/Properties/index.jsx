import "./style.scss";
import CoffeeBean from "../../assets/svg/CoffeeBean.svg";
import Origin from "../../assets/svg/World.svg";
import Acidity from "../../assets/svg/Tube.svg";

const Properties = () => {
  return (
    <div className="properties-container">
      <div className="item">
        <img src={CoffeeBean} alt="propertie image" className="icon" />
        <span className="title">Tueste</span>
      </div>
      <div className="item">
        <img src={Origin} alt="propertie image" className="icon" />
        <span className="title">Origen</span>
      </div>
      <div className="item">
        <img src={Acidity} alt="propertie image" className="icon" />
        <span className="title">Acidez</span>
      </div>
    </div>
  );
};

export default Properties;
