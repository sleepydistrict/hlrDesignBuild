import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Header, Card, Form, TextArea, Button } from 'semantic-ui-react';
import './Contact.css';

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
          <div id='contact'>
        <div className='Background'>
        </div>
        <Navbar />
        {/* <Navbar {this.state.activeItem} /> */}
        <Header
          as='h1'
          content='CONTACT H.L. ROGERS DESIGN/BUILD'
          style={{ fontWeight: 'normal', marginBottom: 0, color: 'orange' }}
        />
        <Card fluid>
          <Card.Content>
            <Form>
              <Form.Group unstackable widths={3}>
              <Form.Input type='text' label='First Name' name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
              <Form.Input type='text' label='Last Name' name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
              <Form.Input type='text' label='Email' name="email" onChange={this.handleChange} value={this.state.email}/>
              </Form.Group>  
              <Form.Field control={TextArea} label='Message' placeholder='Tell us more about you and how H.L.Rogers Design/Build can help you.' onChange={this.handleChange} />
              <Button type='submit' color='orange'>Submit</Button>
              {/* <Form.Field color='orange' control={Button}>Submit</Form.Field> */}
            </Form>
          </Card.Content>
        </Card>  
      </div> 
    )
  }
}

export default Contact;