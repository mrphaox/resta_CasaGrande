import Featured from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import Image from "next/image";

export default function Home() {
return (
  <main >
    <Hero/>
    <Featured/>
    <Services />
    <Menu/>
    <Survey/>
    <Footer/>
    
</main>
  
);



}
