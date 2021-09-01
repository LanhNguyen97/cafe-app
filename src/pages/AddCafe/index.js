import React, { useState } from 'react';
import { connect } from "react-redux";

import Input from '../../components/Input';
import { createNewCafe } from '../../store/actions/cafeActions';

const initState = {
  name: "",
  city: "",
  pinCode: "",
  isMoreDrinks: false,
  image: "https://fasgroup.com.vn/assets/corals/images/default_product_image.png",
};

const AddCafe = (props) => {
  const [state, setState] = useState(initState);

  const onChangeCommon = (name, value) => {
    if (name === 'isMoreDrinks') {
      setState({ ...state, isMoreDrinks: true })
    } else {
      setState({ ...state, [name]: value })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.createCafe(state);
    setState(initState);
  }
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 col-12">
          <form onSubmit={onSubmit}>
            <Input
              label="Cafe name"
              name="name"
              type="text"
              value={state.name}
              onChange={onChangeCommon}
              required />
            <Input
              label="City"
              name="city"
              type="text"
              onChange={onChangeCommon}
              value={state.city}
            />
            <Input
              label="Pincode"
              name="pinCode"
              type="text"
              onChange={onChangeCommon}
              value={state.pinCode}
            />
            <Input
              label="Offers more than 5 drinks"
              name="isMoreDrinks"
              type="radio"
              onChange={onChangeCommon}
              checked={state.isMoreDrinks}
            />
            <Input
              label="Link image"
              name="image"
              type="text"
              onChange={onChangeCommon}
              value={state.image}
            />

            <button type="submit" className="btn btn-success mb-2 w-50">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    createCafe: (data) => {
      dispatch(createNewCafe(data));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddCafe);