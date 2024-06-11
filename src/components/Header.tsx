import { useState } from "react";
import { Cart, DropDown, Logo } from "../assets/SVG";
import { CartState, ProductState } from "../context/Context";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state: { cart }, dispatch } = ProductState();
  const { filterDispatch } = CartState();


  function dropDownHandle() {
    setIsOpen(!isOpen);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    filterDispatch({ type: "SEARCH_QUERY", payload: query });
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <main className="w-screen h-screen">
      <header className="flex items-start justify-between pt-3 bg-[#1c1e36] py-5 header">
        <Link to="/">
          <Logo className="size-10 mr-2 ml-4 logo" />
        </Link>

        <input
          type="text"
          placeholder="Search a Product..."
          className="outline-none searchInput outline-dashed outline-white rounded px-2 py-[3px] searchInput mt-1"
          onChange={handleSearch}
        />

        <div className="px-3 flex flex-col items-end justify-center relative containerDropdown">
          <div
            className="bg-[#28a746] dropDownBtn cursor-pointer text-white w-fit flex py-2 rounded-md items-center justify-center gap-2 mr-6 px-2"
            onClick={dropDownHandle}
          >
            <div className="flex items-center border-r-2 pr-3 relative">
              <p className="bg-[#e74e3a] px-[0.25rem] rounded-full orderCount absolute bottom-4 right-8 text-xs">
                {cart?.length === 0 ? "" : cart.length}
              </p>
              <Cart className="size-5 fill-white cartLogo" />
            </div>
            <DropDown className="size-5 fill-white mt-1 dropDownLogo" />
          </div>
          {isOpen && (
            <div className="w-[30vw] px-2 py-3 shadow-2xl rounded-md border-2 border-[#818181b0] mt-1 dropDownCart absolute top-[100%] z-50 bg-white h-48 overflow-y-auto">
              {cart?.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className="flex items-start py-2 border-b mb-2">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-[30px] object-contain mr-3"
                      />
                    </div>
                    <div>
                      <p className="">{item.title}</p>
                      <span className="font-bold">₹{item.price}</span>
                    </div>
                    <div className="ml-2">
                      <button 
                        className="hover:bg-[#1c1e36] px-1 py-1 rounded-md"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1>no items in cart</h1>
              )}
              <Link to="/cart">
                <button className="bg-[#1c1e36] px-2 py-1 rounded text-white hover:bg-[#2f335a]">
                  Go to Cart
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </main>
  );
};

export default Header;
