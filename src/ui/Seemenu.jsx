import { NavLink } from "react-router-dom";
import AllFood from "./AllFood";

export default function Seemenu() {
  return (
    <div className="grid place-items-center ">
      <div className="my-20">
        <NavLink to="/sea">
          <button className="btn mx-5 btn-outline">SeaFood</button>
        </NavLink>
        <NavLink to="/chicken">
          <button className="btn mx-5 btn-outline">Chicken</button>
        </NavLink>
        <NavLink to="/beef">
          <button className="btn mx-5 btn-outline">BEEF</button>
        </NavLink>
      </div>
      <AllFood />
    </div>
  );
}
