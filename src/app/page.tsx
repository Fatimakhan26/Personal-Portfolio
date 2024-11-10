import Link from "next/link";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Project from "./component/Project";


export default function Home(){
  return(
    <div>
  <Hero/>
  <About/>
  <Skills/>
  <Project/>
  <Contact/>
  
    </div>
  );
}
