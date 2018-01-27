import React, { Component } from 'react';
// import logo from '../../logo.svg';
import { Card, Image, Reveal } from 'semantic-ui-react';
import Navbar from '../../components/navbar/Navbar';
import './Design.css';
import design from './design.jpg';
import buildAK3 from './buildAK3.jpg';

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
      <div className='Design'>
      <div className='DesignDB'>
      </div>
      <Navbar />
      {/* <Navbar {this.state.activeItem} /> */}
      <div id='header'>
      <Card fluid>
          <Card.Content>
            <Reveal animated='small fade'>
              <Reveal.Content visible>
                <Image src={buildAK3} size='small'/>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src={design} size='small' floated='left' />
              </Reveal.Content>
            </Reveal>
          </Card.Content>
        </Card> 
      <h4 style={{color: 'white'}}>Photo by Sergey Zolkin on Unsplash</h4>
      </div>
      </div>
    );
  }
}

export default Design;