import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_ALL_CONTACTS,
} from "../actions/actions";

let InState = {
  isFetched: false,
  contacts: [],
};

const rootReducer = function (state = InState, action) {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        ["isFetched"]: true,
        ["contacts"]: action.data,
      };
    case ADD_CONTACT:
      return {
        ...state,
        ["contacts"]: [Object.assign({}, action.data), ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        ["contacts"]: state.contacts.filter(
          (contact) => contact.id !== action.id
        ),
      };

    case EDIT_CONTACT:
      let newState = {
        ...state,
      };

      for (let i = 0; i < newState.contacts.length; i++) {
        if (action.data.id.toString() === newState.contacts[i].id.toString()) {
          newState.contacts[i].name = action.data.name;
          newState.contacts[i].email = action.data.email;
          newState.contacts[i].phone = action.data.phone;
          break;
        }
      }
      return newState;

    default:
      return state;
  }
};

export default rootReducer;
