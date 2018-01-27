import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Teach.css';
import { Card } from 'semantic-ui-react';

class Teach extends Component {

  render() {

    return (
      <div className='Teach'>
      <div className='TeachBackground'>
      </div>
        <Navbar />
        <div id='header'>
        <Card fluid>
            <Card.Content>
            
            </Card.Content>
          </Card> 
        <h4 style={{color: 'white'}}>Photo by Jamie Street on Unsplash</h4>
        </div>
      </div> 
    )
  }
}

export default Teach;