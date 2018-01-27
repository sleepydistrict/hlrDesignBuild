import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Header, Card, Form, TextArea, Button } from 'semantic-ui-react';
import './Contact.css';
import NodeMailler from '../../dns/index';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    console.log(NodeMailler);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)
  }

  handleSubmit(event) {
    
      }

  render() {
    console.log(this.state)
        
        return (
          <div className='Contact'>
        <div className='Background'>
        </div>
        <Navbar />
        <div id='header'>
        {/* <Navbar {this.state.activeItem} /> */}
        <Header
          as='h1'
          content='CONTACT H.L. ROGERS DESIGN/BUILD'
          style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
        />
        <Card fluid>
          <Card.Content>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group unstackable widths={3}>
              <Form.Input type='text' label='First Name' name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
              <Form.Input type='text' label='Last Name' name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
              <Form.Input type='text' label='Email' name="email" onChange={this.handleChange} value={this.state.email}/>
              </Form.Group>  
              <Form.Field type='text' control={TextArea} label='Message' name='message' placeholder='Tell us more about you and how H.L.Rogers Design/Build can help you.' onChange={this.handleChange} value={this.state.message} />
              <Button type='submit' color='orange'>Submit</Button>
            </Form>
          </Card.Content>
        </Card>  
        <h4 style={{color: 'white'}}>Photo by Alexander Andrews on Unsplash</h4>
      </div> 
      </div>
    )
  }
}

export default Contact;