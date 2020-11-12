import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, withRouter, Link } from "react-router-dom";
import { showError } from "../../utils/errors";
import { CenterContent } from "../shared/styles/Auth";
import { loginUser } from "../../actions/login";
// Props will be sent from action creaors, map state to props via redux stroe
//user
const Login = ({ history, loginUser, loading, error, loggedIn, isAdmin }) => {
  //let history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      isAdmin ? history.push("/dashboard") : history.push("/home");
    }
    // if (loggedIn) history.push("/home");
    // else if (loggedIn && isAdmin) history.push("/dashboard");
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({
      email: user.email,
      password: user.password,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((u) => ({
      ...u,
      [name]: value,
    }));
  };
  // let history = useHistory();
  // const initialValues = {
  //   email: "",
  //   password: "",
  // };

  // // handleSubmit was in here...
  // const { register, formState, errors, reset } = useForm({
  //   defaultValues: { ...initialValues },
  //   mode: "onChange",
  // });

  // // const onSubmit = (data) => {
  // //   console.log(data);
  // //   //loginuser function from action creator
  // //   // loginUser(data).then((res) => {
  // //   //   if (res.status === 200) {
  // //   reset(initialValues);
  // //   history.push("/");
  // //   //   }
  // //   // });
  // // };
  // const [validated, setValidated] = useState(false);
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   event.preventDefault();
  //   event.stopPropogation();
  //   console.log(form);
  // };

  return (
    <CenterContent>
      <Container>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {/* {user && <Alert variant="success">Successfully logged in!</Alert>} */}

        <h3>Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicemail">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
              required
              // ref={register({
              //   required: "email is required",
              //   minLength: {
              //     value: 2,
              //     message: "Must be at least 2 chars long",
              //   },
              // })}
            />
          </Form.Group>
          {/* {showError("email", errors)} */}

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
              // ref={register({
              //   required: "Password is required",
              //   minLength: {
              //     value: 7,
              //     message: "Must be at least 7 chars long",
              //   },
              // })}
            />
          </Form.Group>
          {/* {showError("password", errors)} */}

          <Button
            block
            variant="primary"
            type="submit"
            // disabled={!formState.isValid}
          >
            {loading ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "Submit"
            )}
          </Button>
          <div className="account">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </Form>
      </Container>
    </CenterContent>
  );
};

const mapStateToProps = (state) => {
  const { admin, user } = state;
  return {
    loggedIn: admin.loggedIn,
    isAdmin: user.isAdmin,
  };
};

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
