import React, { createContext, ReactNode, useReducer, useEffect, useContext } from "react";
import { reducer, initVal, State, Action, filterReducer, FilterState, FilterAction } from "./Reducers";

interface CartContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  filterState: FilterState;
  filterDispatch: React.Dispatch<FilterAction>;
}

const ProductContext = createContext<CartContextProps | undefined>(undefined);

const Context = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initVal);
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: undefined,
    byRating: 0,
    searchQuery: "",
  });

  const URL = `https://fakestoreapi.com/products?limit=24&page=${state.page}`;

  async function fetchData() {
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      let products = await res.json();

      if (filterState.searchQuery) {
        products = products.filter((product: any) =>
          product.title.toLowerCase().includes(filterState.searchQuery.toLowerCase())
        );
      }

      if (filterState.sort) {
        products = products.sort((a: any, b: any) =>
          filterState.sort === "ascending"
            ? a.price - b.price
            : b.price - a.price
        );
      }

      if (filterState.byRating > 0) {
        products = products.filter(
          (product: any) => product.rating.rate >= filterState.byRating
        );
      }

      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [state.page, filterState]);

  return (
    <ProductContext.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductState = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductState must be used within a ProductContext.Provider');
  }
  return context;
};

export const CartState = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a ProductContext.Provider');
  }
  return context;
};

export default Context;
