/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// import Searchcard from "./Searchcard"

import Searchcard from "./Searchcard"




export default function Foodcard({data}) {
    console.log(data)
  return (
    <div >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
          {/* {data.map((item) => (
            <div key={item.idCategory}>
              <Searchcard /> item={item} />
            </div>
          ))} */}
        </div>
    </div>
    // <>
    //     {
    //         data.map((items) => (
    //             <li>{items.idMeal}</li>
    //         ))
    //     }
    // </>
  )
}
