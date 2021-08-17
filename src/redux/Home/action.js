import * as types from "../../config/actionType";

export const setLoader = (isLoading) => {
  return {
    type: types.SET_LOADER,
    isLoading,
  };
};

export const getData = (page) => {
  return {
    type: types.GET_DATA,
    page,
  };
};

export const handleState = (field, value) => {
  return {
    type: types.HANDLE_STATE,
    field,
    value,
  };
};

const allFunctionHome = {
  setLoader,
  getData,
  handleState,
};

export default allFunctionHome;
