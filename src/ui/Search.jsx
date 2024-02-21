/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
// import Searchitem from "./Searchitem";

export default function Search() {
  const [search, searchitem] = useState("");
  // const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const searchFood = async (food) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    );
    const data = await res.json();
    searchitem(data.meals);
  };

  console.log(search);

  useEffect(() => {
    searchFood("beef");
  }, []);

  return (
    <div>
      <div className="grid place-items-center">
        <div className="flex items-center my-5">
          <input
            id="search-input"
            type="text"
            onChange={(e) => searchFood(e.target.value)}
            placeholder="Type here to Search"
            className="text-center mt-5 border-none text-white input input-bordered input-warning w-full max-w-xs"
          />
        </div>
      </div>

<Foodcard data = {search}/>
    </div>
  );
}

