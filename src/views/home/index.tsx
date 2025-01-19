import React from 'react';
import Section from '../../components/section';

const HomePage: React.FC = () => {
    return (
        <div className="py-8 home_wrapper md:container md:mx-auto">
            <div className="grid grid-cols-2 gap-1 sections_place sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                {/* Add more <Section /> components as needed */}
            </div>
            {/* <h1 className='my-4'>this's home content</h1> */}
        </div>
    )
};

export default HomePage;
