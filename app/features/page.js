import Image from "next/image";
import Header from '@/components/header'

function New() {
  return (
    <>
    <Header />
    <div className="mt-2 flex justify-center items-center">
     <Image
              src="/blog.jpg"
              className="dark:invert"
              width={850}
              height={24}
              priority
            />
    </div>
   
    </>
  );
}

export default New;