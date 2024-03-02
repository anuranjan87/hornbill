import React from 'react';
import Image from "next/image";

const Bam = () => {
  return (
    <div>
     <Image
              src="/newday.png"
              className="dark:invert"
              width={850}
              height={24}
              priority
            />
    </div>
  );
};

export default Bam;