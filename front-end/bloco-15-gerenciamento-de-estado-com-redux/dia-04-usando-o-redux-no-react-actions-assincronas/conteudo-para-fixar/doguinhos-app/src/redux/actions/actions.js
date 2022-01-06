export const GET_IMAGE = "GET_IMAGE";
export const REQUEST_IMAGE = "REQUEST_IMAGE";
export const FAILED_REQUEST = "FAILED_REQUEST";

const getImage = (json) => {
  return { type: GET_IMAGE, payload: json.message };
};

const requestDog = () => {
  return { type: REQUEST_IMAGE };
};

const failedRequest = (error) => {
  return { type: FAILED_REQUEST, payload: error };
};

export const fetchDog = () => {
  return (dispatch) => {
    dispatch(requestDog);
    return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
      response.json().then(
        (dog) => dispatch(getImage(dog)),
        (error) => dispatch(failedRequest(error))
      )
    );
  };
};
