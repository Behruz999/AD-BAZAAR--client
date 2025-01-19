import React from 'react';
import AdList from '../../components/adList';

const AdPage: React.FC = () => {
    return (
        <div className="py-8 ad_wrapper md:container md:mx-auto md:px-40">
            <div className="grid grid-cols-1 sections_place">
                <AdList />
                <AdList />
                <AdList />
                {/* Add more <Section /> components as needed */}
            </div>
            {/* <h1 className='my-4'>this's ad content</h1> */}
        </div>
    )
};

export default AdPage;
