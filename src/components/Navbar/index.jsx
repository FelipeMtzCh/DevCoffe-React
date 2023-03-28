import "./style.scss";
// import Logo from "../../assets/img/Logo.png";
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
        <Link to="/">
          <img className="logo" src="../../assets/img/Logo.png" alt="Logo" />
        </Link>
        <Link to="/cart">
          <CartWidget content="0" />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
