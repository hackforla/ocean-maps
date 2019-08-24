import SockJS from "sockjs-client";

const websocket = null;

export const middleware = store => next => action => {
  switch (action.type) {
    // User request to connect
    case 'WEBSOCKET:CONNECT':
      // Configure the object
      var sock = new SockJS('https://mydomain.com/my_prefix');

      // Attach the callbacks
      websocket.onopen = () => dispatch({ type: 'WEBSOCKET:OPEN' });
      websocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      websocket.onmessage = (event) => dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });

      break;

    // User request to send a message
    case 'WEBSOCKET:SEND':
      websocket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case 'WEBSOCKET:DISCONNECT':
      websocket.close();
      break;

    default: // We don't really need the default but ...
      break;
  }

  return next(action);
};
