import { toast } from "react-hot-toast";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { addDoc, collection } from "@firebase/firestore";
import db from "../../../db/firebase-config.js";
import "./style.scss";

const FormCheckout = () => {
  const { cartArray } = useContext(CartContext);
  const userRef = collection(db, "Users");

  function User(e) {
    this.nombre = e.target.fullname.value;
    this.email = e.target.email2.value;
    this.codigo = e.target.postalCode.value;
    this.cart = cartArray;
  }

  const handleSubmit = (e) => {
    if (e.target.email1.value != "" || e.target.email2.value != "") {
      if (e.target.email1.value == e.target.email2.value) {
        e.preventDefault();
        const dataUser = new User(e);
        console.log(dataUser);
        toast.success("Datos guardados exitosamente!!");
        toast("Gracias por tu compra!");
        e.target.fullname.value = "";
        e.target.email1.value = "";
        e.target.email2.value = "";
        e.target.postalCode.value = "";
      } else {
        e.preventDefault();
        toast.error("Los email no coinciden!");
      }
    } else {
      e.preventDefault();
      toast.error("Los campos email no pueden estar vacios!");
    }
  };
  return (
    <div className="form-checkout">
      <h1>Formulario de pago</h1>
      <h3>Llene los siguientes datos para completar su orden</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>Nombre completo</label>
          <input type="text" name="fullname" />
        </div>
        <div className="input-block">
          <label>Email</label>
          <input type="email" name="email1" />
        </div>
        <div className="input-block">
          <label>Confirmar Email</label>
          <input type="email" name="email2" />
        </div>
        <div className="input-block">
          <label>Codigo Postal</label>
          <input type="text" name="postalCode" />
        </div>
        <button className="btn-finish" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
