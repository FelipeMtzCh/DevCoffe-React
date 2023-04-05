import { useEffect, useState } from "react";
import db from "../../../db/firebase-config.js";
import { addDoc, collection, getDocs } from "@firebase/firestore";

const AdderDb = () => {
  const [products, setProducts] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState(null);
  const [inputDescription, setInputDescription] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  const productsRef = collection(db, "products");
  const fetchProducts = async () => {
    const productsCollection = await getDocs(productsRef);
    const products = productsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();
    const newItem = {
      title: inputTitle,
      price: Number(inputPrice),
      description: inputDescription,
      category: inputCategory,
      img: "",
    };
    await addDoc(productsRef, newItem);
    fetchProducts();
    setInputTitle("");
    setInputPrice(null);
    setInputDescription("");
    setInputCategory("");
  };

  return (
    <form>
      <input
        value={inputTitle}
        placeholder="title"
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        value={inputPrice}
        placeholder="price"
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <input
        value={inputDescription}
        placeholder="description"
        onChange={(e) => setInputDescription(e.target.value)}
      />
      <input
        value={inputCategory}
        placeholder="category"
        onChange={(e) => setInputCategory(e.target.value)}
      />
      <button onClick={addItem}>Cargar</button>
    </form>
  );
};

export default AdderDb;
