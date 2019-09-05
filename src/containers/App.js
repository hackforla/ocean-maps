import React from 'react';
import { connect } from 'react-redux';

import Helmet from "../components/Helmet";
import Map from "../components/Map"
import { connectWebsocket, sendMessage } from "../modules/websockets";

class App extends React.Component {
  componentDidMount() {
    this.props.connectWebsocket();
    window.sendData = this.props.sendMessage
  }

  render() {
    return (
      <div>
        <Helmet />
        <Map />
      </div>
    );
  }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = ({
  connectWebsocket,
  sendMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
