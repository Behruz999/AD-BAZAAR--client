import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

const Section: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()

    const navigateCategory = () => {
        navigate('/categories')
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center mb-5 text-center bg-gray-100 rounded-lg section_wrapper">
                <img className="w-1/2 rounded-full cursor-pointer" src="./logo.jpg" alt="0" onClick={navigateCategory} />
                <h2 className="mt-4 font-medium cursor-pointer section_title first-letter:capitalize" onClick={navigateCategory}>real estate</h2>
            </div>
        </>
    )
};

export default Section;
