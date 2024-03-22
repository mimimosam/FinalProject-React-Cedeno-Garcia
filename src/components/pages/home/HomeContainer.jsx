import { Spinner } from "@chakra-ui/react";
import { Alert, AlertIcon, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../../common/productCard/ProductCard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function HomeContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError] = useState();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let inquiry = productsCollection;
    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      inquiry = productsCollectionFiltered;
    }

    getDocs(inquiry)
      .then((res) => {
        let elementArray = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setProducts(elementArray);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

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
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)">
      {products.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </Grid>
  );
}

export default HomeContainer;
