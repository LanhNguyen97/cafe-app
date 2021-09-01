import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import cogoToast from "cogo-toast";

import { db } from "../../config/firebaseConfig";
import { ReduxTypes } from './constants';

export const getCafe = () => {
  return dispatch => {
    dispatch({ type: ReduxTypes.GET_LIST })

    return getCafes().then(res => {
      dispatch({ type: ReduxTypes.GET_LIST_DONE, payload: res })
    }).catch(err => {
      dispatch({ type: ReduxTypes.GET_LIST_ERROR, payload: err })
      putErrors("Error, try again.");
    })
  };
}

export const createNewCafe = (data) => {
  return dispatch => {
    dispatch({ type: ReduxTypes.CREATE })

    return createCafe(data).then(res => {
      dispatch({ type: ReduxTypes.CREATE_DONE, payload: data })
      putSuccess("Created successfully");
    }).catch(err => {
      dispatch({ type: ReduxTypes.CREATE_ERROR, payload: err })
      putErrors("Error, try again.");
    })
  };
}

export async function getCafes() {
  const cafeCol = collection(db, 'cafe');
  const citySnapshot = await getDocs(cafeCol);
  const cafeList = citySnapshot.docs.map(doc => doc.data());
  return cafeList;
}

export async function createCafe(data) {
  const cafeCol = collection(db, 'cafe');

  const res = await addDoc(cafeCol, data);

  return res;
}

export const putSuccess = (
  msg = "Success",
  position = "top-center"
) => {
  cogoToast.success(msg, { position });
};

export const putErrors = (
  msg = "Error",
  position = "top-center"
) => {
  cogoToast.warn(msg, { position });
};