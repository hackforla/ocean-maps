import { addDataToMap } from "kepler.gl/actions"

const OPEN = 'WEBSOCKET:OPEN';
const CONNECT = 'WEBSOCKET:CONNECT';
const CLOSE = 'WEBSOCKET:CLOSE';
const MESSAGE = 'WEBSOCKET:MESSAGE';
const SEND = 'WEBSOCKET:SEND';
const DISCONNECT = 'WEBSOCKET:DISCONNECT';

export const connectWebsocket = (url = process.env.REACT_APP_WEBSOCKET_URL) => ({
  type: CONNECT,
  payload: { url }
});

export const sendMessage = message => ({
  type: SEND,
  payload: message
});

let ws;

export const middleware = store => next => action => {
  switch (action.type) {
    // User request to connect
    case CONNECT:
      // Configure the object
      ws = new WebSocket(action.payload.url);

      // Attach the callbacks
      ws.onopen = () => {
        store.dispatch({ type: OPEN });
        store.dispatch(sendMessage(""))
      };
      ws.onclose = (event) => store.dispatch({ type: CLOSE, payload: action.payload.url });
      ws.onmessage = (event) => {
        store.dispatch(addDataToMap({
            datasets: [
              {
                data: {
                  fields: JSON.parse(event.data).schema.fields,
                  rows: JSON.parse(event.data).data.map(row => Object.values(row)),
                }
              }
            ]
          })
        );
      };

      break;

    // User request to send a message
    case SEND:
      ws.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case DISCONNECT:
      ws.close();
      break;

    default:
      break;
  }

  return next(action);
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE:
      // Assuming that your data is a DOMString in JSON format
      const data = JSON.parse(action.payload.data);
      return { ...state, ...data};
    default:
      return state
  }
};

export default reducer;
