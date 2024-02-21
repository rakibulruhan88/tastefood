/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Card({ item }) {
  const { strMeal, strMealThumb } = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{item.strMeal}</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores, accusamus illo architecto, fugit .</p>
        </div>
        <figure>
          <img src={item.strMealThumb} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
}
