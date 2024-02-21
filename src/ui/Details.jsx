import { useEffect, useState } from "react";

export default function Details() {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

  const [food, setfood] = useState([]);

  const fetchFood = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data.meals);
    setfood(data.meals);
  };

  console.log(food)

  useEffect(() => {
    fetchFood();
  },[]);

  return (
    <div>
      <div className="my-20 h-full card card-side bg-base-100 shadow-xl">
        <figure>
        
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <video src={food.
strYoutube
}></video>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
