import React from 'react';
import Category from "../../components/category";

const CategoryPage: React.FC = () => {
    return (
        <>
            <div className="py-8 categorypage_wrapper md:container md:mx-auto">
                <div className="grid grid-cols-2 gap-1 categorypage_place sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </div>
        </>
    )
};

export default CategoryPage;