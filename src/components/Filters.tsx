import { CartState } from "../context/Context";

const Filters = () => {
  const { filterState, filterDispatch } = CartState();

  return (
    <aside className="w-48 ml-2 filter bg-[#1c1e36] rounded-md fixed h-[80vh] flex flex-col items-center pt-11 text-white">
      <h1 className="text-2xl underline mb-12">Filter:</h1>
      <div className="mb-6">
        <input
          type="radio"
          name="sort"
          id="ascending"
          checked={filterState.sort === "ascending"}
          onChange={() =>
            filterDispatch({ type: "SORT_BY_PRICE", payload: "ascending" })
          }
        />
        <label htmlFor="ascending"> Ascending</label>
      </div>

      <div className="mb-6">
        <input
          type="radio"
          name="sort"
          id="descending"
          checked={filterState.sort === "descending"}
          onChange={() =>
            filterDispatch({ type: "SORT_BY_PRICE", payload: "descending" })
          }
        />
        <label htmlFor="descending"> Descending</label>
      </div>

      <div className="rating mb-6">
        <input
          value="5"
          name="rate"
          id="star5"
          type="radio"
          checked={filterState.byRating === 5}
          onChange={() =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: 5 })
          }
        />
        <label title="5 stars" htmlFor="star5">
          ★
        </label>
        <input
          value="4"
          name="rate"
          id="star4"
          type="radio"
          checked={filterState.byRating === 4}
          onChange={() =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: 4 })
          }
        />
        <label title="4 stars" htmlFor="star4">
          ★
        </label>
        <input
          value="3"
          name="rate"
          id="star3"
          type="radio"
          checked={filterState.byRating === 3}
          onChange={() =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: 3 })
          }
        />
        <label title="3 stars" htmlFor="star3">
          ★
        </label>
        <input
          value="2"
          name="rate"
          id="star2"
          type="radio"
          checked={filterState.byRating === 2}
          onChange={() =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: 2 })
          }
        />
        <label title="2 stars" htmlFor="star2">
          ★
        </label>
        <input
          value="1"
          name="rate"
          id="star1"
          type="radio"
          checked={filterState.byRating === 1}
          onChange={() =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: 1 })
          }
        />
        <label title="1 star" htmlFor="star1">
          ★
        </label>
      </div>

      <div>
        <button
          className="bg-white px-2 py-1 text-black border-2 border-black rounded-md hover:bg-[#e0e0e0]"
          onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
};

export default Filters;