import React from "react";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
  let text1Navbar = "Start Bootstrap"
  let text2Navbar = "Home"
  let text3Navbar = "About"
  let text4Navbar = "Services"
  let text5Navbar = "Contact"
	let textojumbotron="A Warm Welcome!"
	let centrojumbotron="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
	let finaljumbotron="Call to action!"
  let textofooter="Copyright &copy; Your Website 2019"
  return (
    <>
	<Navbar text1 ={text1Navbar} text2 ={text2Navbar} text3={text3Navbar} text4={text4Navbar} text5={text5Navbar} />
  <Jumbotron texto1={textojumbotron} texto2={centrojumbotron} texto3={finaljumbotron}/>
  <Portfolio/>
  <Footer texto={textofooter}/>
    </>
  );
};


export default Home;