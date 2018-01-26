import React, { Component } from 'react';
// import logo from '../../logo.svg';
// import { Header, Button, Grid, Segment, Image } from 'semantic-ui-react';
import Navbar from '../../components/navbar/Navbar';

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'name'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })  

  render() {

    // const { activeItem } = this.state

    return (
      <div style={{ backgroundColor:'black', backgroundSize: 'cover', backgroundPosition: 'center center', position: 'fixed', width: '100%', top: '0', bottom: '0' }}>
      <Navbar />
      {/* <Navbar {this.state.activeItem} /> */}

      </div>
    );
  }
}

export default Design;