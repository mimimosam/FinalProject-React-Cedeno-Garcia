import { Button, Spacer } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ItemCount = ({ product, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const handleClick = (counter) => {
    onAdd(counter);
    notify();
  };

  const addOne = () => {
    if (counter < product.stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "warning",
        text: "There's no more stock available for this product",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      Swal.fire({
        icon: "warning",
        text: "Cannot select one less product",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const notify = () =>
    toast("Added to cart!", {
      theme: "light",
      position: "bottom-center",
    });

  return (
    <>
      <Button flex="1" variant="outline" onClick={addOne}>
        +
      </Button>

      <Button
        flex="1"
        variant="outline"
        onClick={subOne}
        disabled={counter === 1 ? true : false}
      >
        -
      </Button>
      <h3>Current quantity: {counter}</h3>
      <Spacer />
      <Button
        variant="outline"
        colorScheme="orange"
        onClick={() => handleClick(counter)}
      >
        Add to cart
      </Button>
      <ToastContainer />
    </>
  );
};
