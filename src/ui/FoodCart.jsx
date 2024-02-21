/* eslint-disable no-unused-vars */


/* eslint-disable react/prop-types */
export default function Food({ item }) {
  const { strCategory, strCategoryDescription, strCategoryThumb } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={strCategoryThumb} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.strCategory}</h2>
          <p>{item.strCategoryDescription.slice(0, 100)}....</p>
          <div className="card-actions justify-end">
            <NavLink to="/detail">
              <button className="btn btn-primary">Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
