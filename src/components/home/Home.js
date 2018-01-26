import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Home.css';
import { Header, Button, Grid, Segment, Image, Icon } from 'semantic-ui-react';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <div className="Image">
        </div>
        <Header
          as='h1'
          content='H.L. ROGERS DESIGN/BUILD'
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
        />
        <Header 
        as='h1'
        inverted
        content='Where design/build meets sustainable thoughtful projects'
        />
        <Image src={logo} className="App-logo" alt="logo" centered />
        <Segment style={{ padding: '19em 0em' }} vertical>
          <Grid container columns={3}>
            <Grid.Row >
              <Grid.Column>
              <Link to='./design'><Button size='huge' fluid color='yellow'><Icon name='compass'/>DESIGN</Button></Link>
              </Grid.Column>
              <Grid.Column >
              <Link to='./build'><Button size='huge'fluid color='olive'><Icon name='magic'/>BUILD</Button></Link>
              </Grid.Column>
              <Grid.Column >
              <Link to='./teach'><Button size='huge'fluid color='green'><Icon name='student'/>TEACHING</Button></Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Home;
