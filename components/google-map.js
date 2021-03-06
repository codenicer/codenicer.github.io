import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      height: '1.9rem',
      width: '1.20rem',
      backgroundImage: "url('/assets/here_logo.svg')",
    }}
  ></div>
)

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  render() {
    return (
      <div style={{ height: '20rem', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GMAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
