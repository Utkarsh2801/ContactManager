import axios from "axios";

export const addContact = (data) => (dispatch, getstate) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/users", data)
    .then((user) => {
      dispatch({
        type: "ADD_CONTACT",
        data: user.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteContact = (id) => (dispatch) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((user) => {
      if (user) {
        dispatch({
          type: "DELETE_CONTACT",
          id: id,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const editContact = (data) => (dispatch) => {
  return axios
    .put(`https://jsonplaceholder.typicode.com/users/${data.id}`)
    .then((user) => {
      if (user) {
        dispatch({
          type: "EDIT_CONTACT",
          data: data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getAll = function (data) {
  return {
    type: "GET_ALL_CONTACTS",
    data: data,
  };
};
