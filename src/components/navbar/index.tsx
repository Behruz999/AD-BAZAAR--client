import React from 'react';
import { PiStorefrontThin } from "react-icons/pi";
import { BsSuitHeart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
// import { TbDeviceIpadDollar } from "react-icons/tb";

const Navbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full h-16 px-4 text-white bg-gray-700 md:px-14">
            {/* Logo */}
            <h1 className="text-xl font-bold sm:block sm:text-xl md:text-2xl">
                <PiStorefrontThin
                    className="hidden sm:block sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />

            </h1>

            {/* Navigation and Actions */}
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
                {/* Heart Icon */}
                <h1 className="flex items-center">
                    <BsSuitHeart size={20} className="cursor-pointer" />
                </h1>

                {/* Profile Icon and Text */}
                <div className="flex items-center cursor-pointer">
                    <IoPersonOutline size={20} />
                    <span className="hidden pl-2 text-sm md:block first-letter:capitalize">your profile</span>
                </div>

                {/* Submit Ad Button */}
                <button className="hidden px-3 py-2 text-sm font-bold text-black transition-all duration-300 first-letter:capitalize md:block bg-slate-200 rounded-tl-xl rounded-br-xl hover:rounded-tr-xl hover:rounded-bl-xl hover:rounded-br-none hover:rounded-tl-none">
                    place an ad
                </button>

                {/* Mobile Menu Icon */}
                <button className="block px-2 py-1 text-sm font-bold text-black transition-all duration-300 md:hidden bg-slate-200 rounded-tl-xl rounded-br-xl hover:rounded-tr-xl hover:rounded-bl-xl hover:rounded-br-none hover:rounded-tl-none first-letter:capitalize">
                    submit ad
                </button>
            </div>
        </div>

    );
};

export default Navbar;