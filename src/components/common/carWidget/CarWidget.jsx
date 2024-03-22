import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";

const CarWidget = () => {
  return (
    <>
      <Link to="/cart">
        <ShoppingCartSimple size={25} />
      </Link>
    </>
  );
};

export default CarWidget;
