import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';
import { Header, Button, Grid, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Image">
        <Header
          as='h1'
          content='H.L. ROGERS DESIGN/BUILD'
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <Segment style={{ padding: '40em 0em' }} vertical>
          <Grid container columns={3}>
            <Grid.Row >
              <Grid.Column>
              <Button size='huge' fluid color='yellow'>DESIGN</Button>
              </Grid.Column>
              <Grid.Column >
              <Button size='huge'fluid color='olive'>BUILD</Button>
              </Grid.Column>
              <Grid.Column >
              <Button size='huge'fluid color='green'>TEACHING</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
      </div>
    );
  }
}

export default App;
