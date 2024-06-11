import { ProductState } from "../context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";

const Home = () => {
  const { state: { products } } = ProductState();
  
  return (
    <main className="flex mt-4">
      <Filters />

    <div className="flex items-center w-screen ml-52 cardContainer">
      <div className="flex items-center justify-center flex-wrap gap-7 w-full">
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />
        })}
      </div>
      </div>
    </main>
  );
}

export default Home;
