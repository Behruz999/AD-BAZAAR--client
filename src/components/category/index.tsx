import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

const Category: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()

    const navigateAd = () => {
        navigate('/ads')
    }
    return (
        <>
            <div className="flex items-center justify-center py-4 mb-3 text-center bg-gray-100 rounded-lg category_wrapper" onClick={navigateAd}>
                <h2 className="font-medium cursor-pointer category_title first-letter:capitalize">motorcycle</h2>
            </div>
        </>
    )
};

export default Category;
