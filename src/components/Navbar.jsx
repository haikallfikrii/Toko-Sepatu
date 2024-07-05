import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import nikeLogo from "../assets/nike.png";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center bg-white fixed top-0 z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between xl:items-baseline items-center text-[#12222E]">
          <div className="flex flex-col gap-y-4">
            <span
              onClick={() => (window.location = "/")}
              className="flex items-center gap-x-2 font-bold text-2xl cursor-pointer"
            >
              <img src={nikeLogo} alt="nike logo" className="h-10 w-auto" />
            </span>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <a
              href="#home"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              About Us
            </a>
            <a
              href="#products"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              Products
            </a>
            <a
              href="#contact"
              className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
            >
              Contact Us
            </a>
          </ul>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown ? (
          <div className="lg:hidden w-full bg-white transition ease-in-out duration-100 fixed top-24 left-0 z-20">
            <div className="w-full h-[100vh] flex flex-col items-center pt-8 gap-4 text-[#12222E]">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#home"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  onClick={showDropdown}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  onClick={showDropdown}
                >
                  About Us
                </a>
                <a
                  href="#products"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  onClick={showDropdown}
                >
                  Products
                </a>
                <a
                  href="#contact"
                  className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  onClick={showDropdown}
                >
                  Contact Us
                </a>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
