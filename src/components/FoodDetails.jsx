import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodId} = useParams()
    return (
        <div className='py-12'>
            details {foodId}
        </div>
    );
}

export default FoodDetails;
