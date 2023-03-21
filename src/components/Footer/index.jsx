import phone from "../../assets/svg/Phone.svg";
import facebook from "../../assets/svg/Facebook.svg";
import tiktok from "../../assets/svg/Tiktok.svg";
import instagram from "../../assets/svg/Instagram.svg";
import at from "../../assets/svg/At.svg";
import whatsapp from "../../assets/svg/Whatsapp.svg";
import copyright from "../../assets/svg/Copyright.svg";
import "./style.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Contacto</p>

        <img className="phone" src={phone} alt="telephone number" />
        <p className="number">(+57) 300-123-4567</p>
        <img className="icon-mail" src={at} alt="email" />
        <p className="mail">contact@email.com</p>

        <div className="line"></div>

        <p className="redes">Siguenos</p>

        {/* tiktok */}
        <a href="https://www.tiktok.com/es/" target="_blank">
          <img className="red-icon tiktok" src={tiktok} alt="tiktok" />
        </a>

        {/* instagram */}
        <a href="https://www.instagram.com/chalarca.felipe/" target="_blank">
          <img className="red-icon instagram" src={instagram} alt="instagram" />
        </a>

        {/* facebook */}
        <a
          href="https://www.facebook.com/felipe.martinezchalarca"
          target="_blank"
        >
          <img className="red-icon facebook" src={facebook} alt="facebook" />
        </a>

        {/* whatsapp */}
        <a href="https://wa.me/573197934304" target="_blank">
          <img className="red-icon whatsapp" src={whatsapp} alt="whatsapp" />
        </a>

        {/* copyright */}
        <div className="copy-block">
          <img className="copyrigth" src={copyright} alt="" />
          <span className="copyrigth-text">Dev-Coffee 2022 all rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
