import React from "react";
import HomeContainer from "./HomeContainer";
import { Button } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../../db/products";

export const Home = () => {
  /*  ----- funcion para guardar docs en firebase -----
	
	const rellenar = () => {
    let productsCollection = collection(db, "products");
    console.log(productsCollection);
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };*/
  return (
    <>
      <HomeContainer />
    </>
  );
};
