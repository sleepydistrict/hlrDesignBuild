import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {

  state = { activeItem: 'name' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <Menu inverted widths={5}>
        <Menu.Item as='a' href='./' name='home' color='yellow' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item as='a' href='./design' name='design' color='orange' active={activeItem === 'design'} onClick={this.handleItemClick} />
        <Menu.Item as='a' href='./build' name='build' color='olive' active={activeItem === 'build'} onClick={this.handleItemClick} />
        <Menu.Item as='a' href='./teach' name='teaching' color='green' active={activeItem === 'teaching'} onClick={this.handleItemClick} />
        <Menu.Item as='a' href='./contact' name='contact' color='teal' active={activeItem === 'contact'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default Navbar;