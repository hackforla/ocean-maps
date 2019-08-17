const LOGIN_PENDING = "AUTH/LOGIN_PENDING";
const LOGIN_FULFILLED = "AUTH/LOGIN_FULFILLED";
const LOGIN_REJECTED = "AUTH/LOGIN_PENDING";

export const login = (email, password) => (dispatch) => {
  try {
    dispatch({
      type: LOGIN_PENDING,
      payload: {
        email
      },
    });
    dispatch({
      type: LOGIN_FULFILLED,
      payload: {
        email
      },
    });
  } catch (err) {
    dispatch({
      type: LOGIN_REJECTED,
      payload: {
        email
      },
    });
  }
};

export default (state = {}, action) => {
  switch(action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_FULFILLED:
      return {
        ...state,
        loading: false
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
