import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Teach.css';
import { Card, Header, Grid, Image } from 'semantic-ui-react';
import teachRAP from './teachRAP.jpg';
import teachRAP2 from './teachRAp2.jpg';
import teachRAP3 from './teachRAP3.jpg';
import teachRAP4 from './teachRAP4.jpg';

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
            <Header 
              as='h1'
              content='H.L. ROGERS DESIGN/BUILD TEACHING PROJECTS'
              style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
            />
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Header 
              as='h1'
              content='RED ANTS PANTS WOMEN CARPENTRY SKILLS'
              style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
            />
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={3}>
                <Image src={teachRAP} size='medium'/>
                </Grid.Column>
                <Grid.Column width={13}>
                  Each year, Red Ants Pants host two classes for women. The long standing class,<br/>
                  chainsaw skills has a new sister, womens carpentry. Heidi has been teaching this<br/>
                  for the past two years!
                </Grid.Column>
              </Grid.Row> 
              <Grid.Row> 
                <Grid.Column width={3}>
                <Image src={teachRAP2} size='medium'/>
                </Grid.Column>
                <Grid.Column width={3}>
                <Image src={teachRAP3} size='medium'/>
                </Grid.Column>
                <Grid.Column width={3}>
                <Image src={teachRAP4} size='medium'/>
                </Grid.Column>
                <Grid.Column width={6}>
                  The ladies cover basic handeling of skilsaws, chop saws, table saws, and pwer drills.
                  Each year they build a bar for the Red Ants Pants Music Festival which then gets auctioned
                  and the profits go back into the program.
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>  
        </Card> 
        <h4 style={{color: 'white'}}>Photo by Jamie Street on Unsplash</h4>
        </div>
      </div> 
    )
  }
}

export default Teach;