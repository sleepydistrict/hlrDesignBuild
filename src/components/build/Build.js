import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Card, Grid, Image, Header } from 'semantic-ui-react';
import './Build.css';
import buildAK10 from './buildAK10.jpg';
import buildAK9 from './buildAK9.jpg';
import buildAK8 from './buildAK8.jpg';
import buildAK7 from './buildAK7.jpg';
import buildAK6 from './buildAK6.jpg';
import buildAK5 from './buildAK5.jpg';
import buildAK4 from './buildAK4.jpg';
import buildAK3 from './buildAK3.jpg';
import build from './build.jpg';

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
              <Header 
                as='h1'
                content='H.L. ROGERS DESIGN/BUILD BUILDING PROJECTS'
                style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
              />
            </Card.Content>
          </Card>    
          <Card fluid>
            <Card.Content>
              <Header 
                as='h1'
                content='ROGERS FAMILY HOMESTEAD SHED'
                style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
              />
                <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={3}>
                    <Image src={buildAK10} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                      This was a small design build project on the Rayn family homstead. <br/>
                      The family needed a small storage shed tha had easy access for the snow machine.
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}>
                    <Image src={buildAK9} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                      This was a small design build project on the Rayn family homstead. <br/>
                      The family needed a small storage shed tha had easy access for the snow machine.
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}>
                    <Image src={buildAK8} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Image src={buildAK7} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Image src={buildAK6} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      This was a small design build project on the Rayn family homstead. <br/>
                      The family needed a small storage shed tha had easy access for the snow machine.
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                    The family needed a small storage shed tha had easy access for the snow machine.
                    </Grid.Column> 
                    <Grid.Column width={3}>
                    <Image src={buildAK5} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Image src={buildAK4} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Image src={buildAK3} size='small'/>
                    </Grid.Column> 
                  </Grid.Row>  
                </Grid>
              </Card.Content>  
            </Card> 
          <Card fluid>
              <Card.Content>
              <Header 
                as='h1'
                content='Montana'
                style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
              />
                <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={3}>
                    <Image src={build} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                      Custom build cabin start to finish
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>  
            </Card> 
          <h4 style={{color: 'white'}}>Photo by Hudson Hintze on Unsplash</h4>
        </div>
      </div>    
    )
  }
}

export default Build;