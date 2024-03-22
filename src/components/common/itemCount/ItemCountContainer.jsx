import Swal from "sweetalert2";
import { ItemCount } from "./ItemCount";
import { useState } from "react";

export const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
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

  return (
    <>
      <ItemCount
        counter={counter}
        addOne={addOne}
        subOne={subOne}
        onAdd={onAdd}
      />
    </>
  );
};
