import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InforData";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CardsTwo from "./components/CardsTwo";


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  };

  return (
  <>
    <GlobalStyle />
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData}/>
    <InfoSection {...InfoData}/>
    <Cards />
    <CardsTwo />
    <Footer />

  </>
  );
};

export default App;
