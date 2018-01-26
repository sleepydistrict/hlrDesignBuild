import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';

class Build extends Component {

  render() {

    return (
      <div style={{ backgroundColor:'black', backgroundSize: 'cover', backgroundPosition: 'center center', position: 'fixed', width: '100%', top: '0', bottom: '0' }}>
        <Navbar />
        {/* <Navbar {this.state.activeItem} /> */}

      </div>    
    )
  }
}

export default Build;