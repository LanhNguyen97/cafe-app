import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import ItemCafe from '../../components/ItemCafe';
import Loading from '../../components/Loading';
import { getCafe } from '../../store/actions/cafeActions';
import { WrapperList } from './styled';

const ListCafe = (props) => {
  const { getCafes, cafe = {} } = props;
  const { dataCafe = [], isLoading = false } = cafe;

  useEffect(() => {
    getCafes();
  }, []);

  return (
    <WrapperList className="container position-relative">
      {isLoading && <Loading />}
      <div className="row">
        {
          dataCafe.length > 0 ? dataCafe?.map((item, index) => (
            <div className="col-md-3 col-sm-6 mb-3" key={index.toString()}>
              <ItemCafe data={item} />
            </div>
          )) : <div><Link to="/cafe/add">Empty, please add some cafe</Link></div>
        }

      </div>
    </WrapperList>
  );
};

function mapStateToProps(state) {

  return {
    cafe: state.cafe,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCafes: () => {
      dispatch(getCafe());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCafe);