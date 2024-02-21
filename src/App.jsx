// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import AllFood from "./ui/AllFood";
import Searchitem from "./ui/Searchitem";
// import Search from "./ui/Search";
import Seemenu from "./ui/Seemenu";
import FirstFood from "./ui/FirstFood";
import Chicken from "./ui/Chicken";
import Beef from "./ui/Beef";
import Details from "./ui/Details";


function App() {
  return <>
    <Header />
    {/* <Search /> */}
    <Routes>
      <Route path="/" element={<Hero />}/>
      <Route path="/top" element={<AllFood />}/>
      <Route path="/" element={<Hero />}/>
      <Route path ="/beef" element={<Beef />} />
      <Route path ="/search" element={<Searchitem />} />
      <Route path ="/see" element={<Seemenu />} />
      <Route path ="/sea" element={<FirstFood />} />
      <Route path ="/chicken" element={<Chicken />} />
      <Route path ="/detail" element={<Details />} />
      
    </Routes>
    <Footer />
  </>;
}

export default App;
