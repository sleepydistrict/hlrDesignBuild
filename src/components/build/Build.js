import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Card } from 'semantic-ui-react';
import './Build.css';

class Build extends Component {

  render() {

    return (
      <div className='Build'>
        <div className='BuildBackground'>
        </div>
        <Navbar />
        <div id='header'>
        <Card fluid>
            <Card.Content>
            
            </Card.Content>
          </Card> 
        <h4 style={{color: 'white'}}>Photo by Hudson Hintze  on Unsplash</h4>
        </div>
      </div>    
    )
  }
}

export default Build;