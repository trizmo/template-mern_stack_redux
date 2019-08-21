import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,

} from 'reactstrap';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null
    }
  }



  render() {
    return (
      <div>
        <h2>Register</h2>
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
