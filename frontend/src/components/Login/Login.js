import { connect } from "react-redux";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
export const Login = () => {
  let history = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };

  const { register, handleSubmit, formState, errors, reset } = useForm({
    defaultValues: { ...initialValues },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    //loginuser function from action creator
    // loginUser(data).then((res) => {
    //   if (res.status === 200) {
    reset(initialValues);
    history.push("/");
    //   }
    // });
  };

  return (
    <>
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        {user && <Alert variant="success">Successfully logged in!</Alert>}

        <h3>Login</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter Username"
              ref={register({
                required: "Username is required",
                minLength: {
                  value: 2,
                  message: "Must be at least 2 chars long",
                },
              })}
            />
          </Form.Group>
          {showError("username", errors)}

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              ref={register({
                required: "Password is required",
                minLength: {
                  value: 7,
                  message: "Must be at least 7 chars long",
                },
              })}
            />
          </Form.Group>
          {showError("password", errors)}

          <Button
            block
            variant="primary"
            type="submit"
            disabled={!formState.isValid}
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
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
