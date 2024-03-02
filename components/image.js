import React from 'react';
import Image from "next/image";

const Pic = () => {
  return (
    <div>
     <Image
              src="/image.png"
              className="dark:invert"
              width={850}
              height={24}
              priority
            />
    </div>
  );
};

export default Pic;
