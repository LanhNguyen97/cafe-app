import React from 'react';
import { isFileImage } from '../../utils';
import { WrapperItemCafe } from './styled';

const  IMAGE_DEFAULT = "https://fasgroup.com.vn/assets/corals/images/default_product_image.png";

const ItemCafe = (props) => {
  const { data = {} } = props;
  const { 
    name = "--", 
    city = "--", 
    pinCode = "--", 
    isMoreDrinks = false, 
    image = IMAGE_DEFAULT 
  } = data;
  
  return (
    <WrapperItemCafe>
      <div className="wrapper-image">
        <img src={isFileImage(image) ? image : IMAGE_DEFAULT} alt={name} />
      </div>
      <div className="wrapper-info">
        <span className="mb-2">Name: {name}</span>
        <span className="mb-2">City: {city}</span>
        <span>Pincode: {pinCode}</span>
        <span>Drinks (> 5): {String(isMoreDrinks)}</span>
      </div>
    </WrapperItemCafe>
  );
};

export default ItemCafe;