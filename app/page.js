'use client'
import Image from "next/image";
import Header from "../components/header"
import Hero from "../components/hero"
import Pic from "../components/image"
import Sec from "../components/second"
import Bam from "../components/bam"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
<Header />
    <div className="flex justify-center items-center py-1">
            <Image
              src="/project.png"
              className="dark:invert"
              width={850}
              height={24}
              priority
            />
            </div>
            <div className="margin-auto">
            <Hero />
         </div>
         <div className="flex justify-center items-center py-1">
         <Pic />
         </div>
         <div>
        <Sec />
         </div>
         <div className="flex justify-center items-center py-1">
         <Bam />
         </div>
    
         <Contact />
         <Footer />
         

         </div>
  );
}
