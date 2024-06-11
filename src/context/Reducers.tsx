export interface State {
  page: number;
  products: any[];
  cart: any[];
}

export interface Action {
  type: string;
  payload?: any;
}

export const initVal: State = {
  page: 0,
  products: [],
  cart: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: state.page + 1
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id)
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.map(c =>
          c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
        )
      };
    default:
      return state;
  }
};


export interface FilterState {
  sort?: string;
  byRating: number;
  searchQuery: string;
}

export interface FilterAction {
  type: 'SORT_BY_PRICE' | 'FILTER_BY_RATING' | 'SEARCH_QUERY' | 'CLEAR_FILTERS';
  payload?: any;
}

const filterInitVal: FilterState = {
  sort: undefined,
  byRating: 0,
  searchQuery: "",
};

export const filterReducer = (state: FilterState = filterInitVal, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, byRating: action.payload };
    case 'SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'CLEAR_FILTERS':
      return filterInitVal;
    default:
      return state;
  }
};