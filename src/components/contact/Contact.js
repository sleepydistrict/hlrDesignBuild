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
    const nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: 'sleepydistrict01@gmail.com',
        pass: 'riley420'
      },
      tls:{
        rejectUnauthorized: false
      }
    });

    let HelperOptions = {
      from: "'Gregory Lesky' <sleepydistrict01@gmail.com",
      to: 'sleepydistrict01@gmail.com',
      subject: 'Message from H.L.R. Design/Build site!',
      text: 'Heyo'
    }
    transporter.sendMail(HelperOptions, (error, info) => {
      if(error){
        return console.log(error);
      }
      alert('The message has been sent')
      console.log(info)
    })
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