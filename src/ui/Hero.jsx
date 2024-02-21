/* eslint-disable react/no-unescaped-entities */

export default function Hero() {
  return (
    <div>
      <div className="hero my-bg min-h-screen bg-base-200 from-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold text-white">
              EVERY BITE NARRATES A TALE
            </h1>
            <p className="py-8 text-white">
              Over the years, we've had the pleasure of serving more than 3,000
              individuals
            </p>

            <NavLink to="/see">
              <button className="btn btn-primary ml-4 text-xl bold">Categories</button>
            </NavLink>

            <NavLink to="/top">
              <button className="btn btn-primary ml-4 bold text-xl">Top items </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
