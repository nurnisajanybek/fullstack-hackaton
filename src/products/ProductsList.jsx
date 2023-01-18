import React from 'react';
import { useAuth } from '../components/context/AuthContext';
import ProductsCard from './ProductsCard';

const ProductsList = () => {


    return (
        <div>
            <ProductsCard/>
        </div>
    );
};

export default ProductsList;