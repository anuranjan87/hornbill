import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-gray-300 items-center">
      <div className="">
      
        <div className="">
          <ul className="text-xs flex font-normal justify-center gap-x-7 lg:gap-14 p-2 ">
            <div className="w-5 lg:w-8">
            <li><a href="/" className="hover:text-blue-200 transition-colors duration-300"><Image src="/new.png" width={30} height={2}/></a> </li>
            </div>
            <li className='flex items-center'><a href="/" className="hover:text-blue-200 transition-colors duration-300">Home</a></li>
            <li className='flex items-center'><a href="/features" className="hover:text-blue-200 transition-colors duration-300">Features</a></li>
            <li className='flex items-center'><a href="/pricing" className="hover:text-blue-200 transition-colors duration-300">Pricing</a></li>
            <li className='flex items-center'><a href="/about" className="hover:text-blue-200 transition-colors duration-300">About</a></li>
          </ul>
          </div>
      </div>
    </header>
  );
}

export default Header;

