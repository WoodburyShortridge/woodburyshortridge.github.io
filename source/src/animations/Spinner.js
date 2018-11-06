import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class Spinner extends Component {
  render() {
    return(
      <Loader
        type="ThreeDots"
        color="#328bff"
        height="35"
        width="100"
      />
    );
  }
}

export default Spinner

