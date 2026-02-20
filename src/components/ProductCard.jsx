import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} className="h-40 mx-auto"/>
      <h3 className="text-sm mt-2">{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={()=>dispatch(addToCart(product))}
        className="bg-green-500 text-white w-full mt-2 p-1 rounded
        active:bg-green-600 transition-colors duration-150">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;