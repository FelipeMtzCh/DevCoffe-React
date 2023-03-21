import "./style.scss";
import Logo from "../../assets/img/logo.png";
import MenuIcon from "../../assets/svg/MenuIcon.svg";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <Button label="Products" />
        </Link>
        {/* <img className="menu" src={MenuIcon} /> */}
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <CartWidget content="0" />
      </header>
    </div>
  );
};

export default Navbar;
