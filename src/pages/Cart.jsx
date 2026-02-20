import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../store/cartSlice";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((a, i) => a + i.price * i.qty, 0);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">Your cart is empty!</p>
        ) : (
          <div className="space-y-4">
            {items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow transition-colors"
              >
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">{i.title}</h2>
                  <p className="text-gray-500 dark:text-gray-300">₹{i.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decreaseQty(i.id))}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    -
                  </button>

                  <span className="px-2 text-gray-900 dark:text-white">{i.qty}</span>

                  <button
                    onClick={() => dispatch(increaseQty(i.id))}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(i.id))}
                    className="ml-4 px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="flex justify-end mt-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Total: ₹{total.toFixed(2)}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;