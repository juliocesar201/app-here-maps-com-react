import React from 'react';
import H from "@here/maps-api-for-javascript";
import onResize from 'simple-element-resize-detector';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
    if (!this.map) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: 'AngAAE5qafu_toJ2Lwr-ueGYqe65XvCJe9kyL-A-VMs'});
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: -8.3678162, lng: -35.0315702},
          zoom: 3,
        },
      );
      this.map = map;
    }
  }

  render() {
    return (
      <div
      style={{ position: 'relative', width: '100%', height:'300px' }}
      ref={this.ref}
      />
    )
  }
}
