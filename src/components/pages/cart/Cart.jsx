import {
  Stack,
  Card,
  CardHeader,
  Text,
  Heading,
  Image,
  Button,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const removeAllItems = () => {
    Swal.fire({
      title: "Are you sure you want to delete all items?",
      showDenyButton: true,
      text: "You will delete every item added to the cart",
      showCancelButton: false,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#ff6833",
      denyButtonText: "No, don't delete",
      denyButtomColor: "#a7958e",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Succesfully deleted", "", "deleted");
      }
    });
  };

  return (
    <div>
      <Stack spacing="4">
        {cart.map((product) => (
          <Card
            key={product.id}
            variant="elevated"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
          >
            {" "}
            <Image
              alt={product.img}
              src={product.img}
              borderRadius="lg"
              maxW={{ base: "150%", sm: "300px" }}
            ></Image>
            <CardHeader>
              <Heading size="md"> {product.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Price: {product.price}</Text>
              <Text>Stock in cart: {product.stock}</Text>
              <Button
                colorScheme="orange"
                variant="outline"
                onClick={() => removeById(product.id)}
              >
                Remove from cart
              </Button>
            </CardBody>
          </Card>
        ))}
      </Stack>
      <Divider />
      <Card align="center">
        <CardHeader px={8} py={2} h={8}>
          <Heading size="md"> Your Shopping Cart Total: ${total}</Heading>
        </CardHeader>
        <CardBody maxH="100px">
          <Button px={8} py={2} mx={2} colorScheme="orange">
            {" "}
            <Link to="/checkout">Proceed to checkout</Link>
          </Button>

          <Button onClick={removeAllItems} colorScheme="red" variant="outline">
            Remove all
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
