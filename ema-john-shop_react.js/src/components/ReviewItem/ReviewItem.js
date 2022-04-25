import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ item ,deleteReviewItem}) => {
    const { _id, name, img, price, shipping } = item
    return (
        <div className='review-section'>
            <div className='review-item-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-title'>
                <h3>{name.length < 20 ? name : name.slice(0,20)+'...'}</h3>
                <h5>Price: {price}</h5>
                <h5>Shipping Charge: {shipping}</h5>
            </div>
            <div>
                <button className='review-delete-button' onClick={()=>deleteReviewItem(_id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;