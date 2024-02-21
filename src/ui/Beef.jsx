/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import Loading from "./Loading";
import Card from "./Card";

function Beef () {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

  const [food, setfood] = useState([]);

  const fetchFood = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data.meals);
    setfood(data.meals);
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
          BEEF{" "}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
          {food.map((item) => (
                <div key={item.idMeal}>
                    <Card item ={item} />
                </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Beef;
