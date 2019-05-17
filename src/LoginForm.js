import React from "react";
import "./custom.css";
import { connect } from "react-redux";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class LoginForm extends React.Component {
  handleClick = () => {
    var userInput = document.getElementById("usernameInput");
    var userValue = userInput.value;
    var passInput = document.getElementById("passwordInput");
    var passValue = passInput.value;

    axios.get(`http://localhost:3000/users`).then(res => {
      if (res.username == userValue && res.password === passValue) {
        alert("redirect");
      }
    });
  };
  render() {
    return (
      <div className="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  id="usernameInput"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  id="passwordInput"
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleClick}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getLocations: offset => dispatch(getLocations(offset)),
  resetQueryObjToDefault: () => dispatch(resetQueryObjToDefault())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
