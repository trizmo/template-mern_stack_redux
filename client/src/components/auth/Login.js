import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value.toUpperCase() }, () => {
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;

    // Create user Object
    const newUser ={
      name, 
      email,
      password
    };

    //Attempt to register newUser
    this.props.register(newUser)

    //closes modal
    // this.toggle();
  }

  render() {
    return (
      <div>
        <h2>Login</h2>

        <Form onSubmit={this.onSubmit}>
          <FormGroup>

            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.onChange}
              className="mb-3"
            />

            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.onChange}
              className="mb-3"
            />

            <Button
              color="dark"
              style={{ marginTop: "2rem" }}
              block
            >
              Login
              </Button>

          </FormGroup>
        </Form>

      </div>
    )
  }
}
