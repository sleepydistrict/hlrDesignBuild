import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Home.css';
import { Header, Button, Grid, Segment, Image } from 'semantic-ui-react';

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
        <Image src={logo} className="App-logo" alt="logo" centered />
        <Segment style={{ padding: '30em 0em' }} vertical>
          <Grid container columns={3}>
            <Grid.Row >
              <Grid.Column>
              <Link to='./design'><Button size='huge' fluid color='yellow'>DESIGN</Button></Link>
              </Grid.Column>
              <Grid.Column >
              <Link to='./build'><Button size='huge'fluid color='olive'>BUILD</Button></Link>
              </Grid.Column>
              <Grid.Column >
              <Link to='./teach'><Button size='huge'fluid color='green'>TEACHING</Button></Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Home;
