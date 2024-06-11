import { useEffect, useState } from "react";
import { ProductState } from "../context/Context";

interface Product {
  id: string;
  title: string;
  price: number;
  qty: number;
  image: string;
}

interface State {
  cart: Product[];
}

const Carts = () => {
  const { state: { cart }, dispatch } = ProductState() as { state: State; dispatch: React.Dispatch<any> };
  const [total, setTotal] = useState<string>("0");

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    setTotal(total.toFixed(2));
  }, [cart]);

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const handleChangeQty = (id: string, qty: string) => {
    dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty: Number(qty) } });
  };

  return (
    <>
      <h1 className="text-3xl underline underline-offset-8 text-center py-7">Cart 🛒</h1>
      {
        cart.length === 0 ? (
          <h1 className="text-center text-3xl font-extrabold text-[#1c1e36] mt-24">No Items</h1>
        ) : (
          <div className="flex w-screen justify-evenly">
            <div>
              {cart.map((prod) => {
                return (
                  <div key={prod.id} className="flex items-center border-b border-[#919191] py-4 pl-4">
                    <div>
                      <img src={prod.image} alt={prod.title} className="size-[80px] object-contain mr-4" />
                    </div>
                    <div className="flex flex-col items-start">
                      <h1>{prod.title}</h1>
                      <span className="font-bold">₹{prod.price}</span>
                      <div>
                        <label htmlFor="quantity">Quantity:{" "}</label>
                        <select
                          name="quantity"
                          className="border border-black border-dashed px-1 py-1 rounded"
                          value={prod.qty}
                          onChange={(e) => handleChangeQty(prod.id, e.target.value)}
                        >
                          {[...Array(10).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <button
                        className="hover:bg-[#1c1e36] px-1 py-1 rounded-md ml-4"
                        onClick={() => handleRemoveFromCart(prod.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-[max(20vw,250px)] bg-[#1c1e36] text-white flex pb-4 flex-col items-center gap-5 rounded-md mr-4 mt-4 px-2 pt-4">
              <span className="text-xl ml-4">Subtotal <span className="font-semibold">({cart.length})</span> items</span>
              <div className="ml-4 font-semibold">Total: ₹{total}</div>
              <button className="bg-[#28a746] px-2 py-2 rounded w-full hover:bg-[#206e32]">Proceed to checkout</button>
            </div>
          </div>)
      }
    </>
  );
};

export default Carts;