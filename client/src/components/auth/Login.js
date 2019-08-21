import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

//REDUX
import { connect } from 'react-redux'
import { login } from '../../store/actions/authActions'



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    // Create user Object
    const user = {
      email,
      password
    };

    //Attempt to Login newUser
    this.props.login(user)
    console.log("form submitted")

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

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  login
})(Login)
