/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Food from "./FoodCart";
import Loading from "./Loading";

function AllFood() {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const [food, setfood] = useState([]);

  const fetchFood = async () => {
    const res = await fetch(API_URL);
    const data = awit res.json();
    console.log(data.categories);
    setfood(data.categories);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  if (food.length == 0) {
    return (
      <>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1 className="text-center text-6xl text-white my-10 font-bold">
          {" "}
          TOP PICK{" "}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
          {food.map()item=> (
            <div key={item.idCategory}>
              <Food item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllFood;
