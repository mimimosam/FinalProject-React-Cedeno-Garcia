import { collection, doc, getDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { ProductDetail } from "./ProductDetail";
import { CartContext } from "../../../context/CartContext";
import { Spinner } from "@chakra-ui/react";

export const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError] = useState();

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");
    let singleProduct = doc(productsCollection, id);
    getDoc(singleProduct)
      .then((res) => {
        setProduct({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading)
    return (
      <div>
        {" "}
        <Spinner
          color="green.500"
          size="xl"
          emptyColor="gray.200"
          thickness="3.5px"
        />
      </div>
    );
  else if (isError)
    return (
      <div>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </div>
    );

  const onAdd = (stock) => {
    let productInfo = {
      ...product,
      stock: stock,
    };
    addToCart(productInfo);
  };

  return (
    <>
      <ProductDetail product={product} onAdd={onAdd} initial={initial} />
    </>
  );
};
