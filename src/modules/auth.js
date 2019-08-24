import { WebAuth } from "auth0-js";

const auth0 = new WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENTID,
  responseType: "token"
});

const LOGIN_PENDING = "AUTH/LOGIN_PENDING";
const LOGIN_FULFILLED = "AUTH/LOGIN_FULFILLED";
const LOGIN_REJECTED = "AUTH/LOGIN_REJECTED";

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_PENDING,
    payload: {
      email
    },
  });
  auth0.login({
    realm: 'Username-Password-Authentication', //connection name or HRD domain
    username: email,
    password,
    audience: 'https://ai-on-the-beach.auth0.com/api/v2',
    // scope: 'read:order write:order'
  }, (result, error) => {
    console.log(result, error);
    if (error) {
      dispatch({
        type: LOGIN_REJECTED,
        payload: {
          email
        },
      });
    } else {
      dispatch({
        type: LOGIN_FULFILLED,
        payload: {
          email
        },
      });
    }
  })
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

export const isAuthenticated = state => !!state.auth.token;
