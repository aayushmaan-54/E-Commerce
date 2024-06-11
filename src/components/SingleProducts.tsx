import { ProductState } from "../context/Context";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};



const SingleProducts = ({ prod }: { prod: Product }) => {

  const { state: { cart }, dispatch } = ProductState();

  return (
    <div className="shadow border-2 border-dashed rounded border-black product w-[300px] px-2 py-4">
      <img src={prod.image} alt={prod.title} className="w-full productImg h-[150px] object-contain" />
      <h1 className="font-medium">{prod.title}</h1>
      <p className="font-semibold">₹{prod.price}</p>
      <p>Rating: <span className="font-semibold">{prod.rating.rate}</span> ({prod.rating.count})</p>
      {
        cart.some(p => p.id === prod.id) ? (
          <button className="bg-[#ff6767] hover:bg-[#d35454] text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#ff676796] active:outline-none active:ring-2 active:ring-[#ff676796] w-full mt-2" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: prod })}>
            Remove from Cart
          </button>
        ) : (
          <button className="bg-[#28a746] hover:bg-[#1e8035] text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#3d52428e] active:outline-none active:ring-2 active:ring-[#28a7468e] w-full mt-2" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: prod })}>
            Add to Cart
          </button>
        )
      }
    </div>
  );
}

export default SingleProducts;
