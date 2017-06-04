import React, { PureComponent, PropTypes } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Alert
} from 'react-bootstrap';
import { isEmpty } from 'lodash';

class LoginForm extends PureComponent {
  static propTypes = {
    login: PropTypes.func,
    errorMessage: PropTypes.string,
    isLoggedIn: PropTypes.boolean
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  renderErrorMessage() {
    if (!isEmpty(this.props.errorMessage) && !this.props.isLoggedIn) {
      return (
        <Alert
          bsStyle="danger">{this.props.errorMessage}</Alert>
      )
    } else null;
  }

  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        <FormGroup bsSize="lg">
          <FormControl
            type="text"
            placeholder="Email"
            onChange={i => this.setState({ email: i.target.value })} />
        </FormGroup>
        <FormGroup bsSize="lg">
          <FormControl
            type="password"
            placeholder="Password"
            onChange={i => this.setState({ password: i.target.value })} />
        </FormGroup>
        { this.renderErrorMessage() }
        <Button bsSize="lg" bsStyle="success" type="submit">
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm;
