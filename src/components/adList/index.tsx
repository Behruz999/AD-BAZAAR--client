import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

const AdList: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()

    const navigateCategory = () => {
        navigate('/ad')
    }
    return (
        <>
            <div className="relative flex flex-col items-center py-4 mb-6 bg-gray-100 rounded-lg shadow-lg sm:flex-row adlist_wrapper" onClick={navigateCategory}>
                <div className="flex-shrink-0 w-full p-2 sm:w-1/4 md:w-1/5 lg:w-1/6 adlist_left">
                    <img className="object-cover w-full h-auto mx-auto rounded-lg cursor-pointer max-h-64" src="./logo.jpg" alt="0" />
                </div>
                <div className="flex flex-col justify-between flex-grow p-4 adlist_right">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col md:flex-row md:items-start adlist_right_header">
                            <div className="flex-grow md:pr-4">
                                <h2 className="text-lg font-bold text-gray-700 break-words cursor-pointer sm:text-xl text-start adlist_title">
                                    Product list Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>
                                <h2 className="mt-2 text-xl font-bold text-green-600 sm:text-2xl md:mt-1 text-start adlist_price">
                                    $3,400,000
                                </h2>
                            </div>
                            <div className="mt-3 md:mt-0 md:ml-4">
                                <CiHeart size={30} className="text-gray-500 transition-colors duration-300 cursor-pointer hover:text-red-500" />
                            </div>
                        </div>
                        <div className="hidden mt-4 md:block adlist_right_desc">
                            <h5 className="text-sm text-gray-600 md:text-base line-clamp-2 text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum reiciendis dignissimos magnam quo ut vero quas perspiciatis veritatis sequi.
                            </h5>
                        </div>
                        <div className="mt-4 text-sm text-gray-500 adlist_right_date">
                            <h5 className="text-start">8/20/2024 1:47 PM</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default AdList;
