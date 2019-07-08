import axios from "axos";

import { GET_ERRORS, GET_PROFILE, PROFILE_LOADING } from "./types";

// get current profile
export const getCurrentProfile = () => {
  dispatchEvent(setProfileLoading());
  axios
    .get("http://localhost:5000/api/profile")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

// profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
