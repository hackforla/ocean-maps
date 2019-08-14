import KeplerGl from 'kepler.gl';
import React from "react";
import viewSize from "view-size";

const Map = props => {
  const { x, y } = viewSize();
  return (
    <KeplerGl
      id="foo"
      width={x}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      height={y}
    />
  );
};

export default Map;
