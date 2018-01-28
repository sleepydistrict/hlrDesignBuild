import React, { Component } from 'react';
// import logo from '../../logo.svg';
import { Card, Image, Grid, Header } from 'semantic-ui-react';
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
            <Header 
              as='h1'
              content='H.L. ROGERS DESIGN/BUILD DESIGN PROJECTS'
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
                <Image src={buildAK3} size='small'/>
                </Grid.Column>
                <Grid.Column width={13}>
                  This was a small design build project on the Rayn family homstead. <br/>
                  The family need a small storage shed tha had easy access for the snow machine.
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>  
        </Card> 
      <Card fluid>
          <Card.Content>
            <Header 
              as='h1'
              content='NICARAGUA CUSTOM DUPLEX'
              style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
            />
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={3}>
                <Image src={design} size='small'/>
                </Grid.Column>
                <Grid.Column width={13}>
                  This is a model from my first independent project as and architect. 
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>  
        </Card> 
      <h4 style={{color: 'white'}}>Photo by Sergey Zolkin on Unsplash</h4>
      </div>
      </div>
    );
  }
}

export default Design;