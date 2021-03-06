import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { LoginContext } from "../App";
import {
  createUser,
  signInUser,
  signInWithFacebook,
  signInWithGoogle,
} from "./firebaseAuthentication";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  // LOGIN CONTEXT
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  // ROUTER REDIRECTION
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // IS NEW USER ? CHECKBOX HANDLE
  const [newUser, setNewUser] = useState(true);

  const { register, handleSubmit, errors } = useForm();

  // EMAIL AND PASSWORD VALIDATION STATE
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();

  // ON SUBMIT IF EVERYTHING VALID
  const onSubmit = (data) => {
    if (newUser && isEmailValid && isPasswordValid) {
      const { name, email, password } = data;

      createUser(name, email, password)
        .then((newUser) => {
          setLoggedIn(newUser);
          setTimeout(() => {
            history.replace(from);
          }, 1500);
        })
        .catch((error) => {
          const message = error.message;
          const user = {
            message: message,
          };
          setLoggedIn(user);
        });
    }

    if (!newUser) {
      signInUser(data.email, data.password)
        .then((user) => {
          setLoggedIn(user);
          setTimeout(() => {
            history.replace(from);
          }, 1500);
        })
        .catch((error) => {
          const message = error.message;
          const user = {
            message: message,
          };
          setLoggedIn(user);
        });
    }
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        setLoggedIn(user);
        setTimeout(() => {
          history.replace(from);
        }, 1500);
      })
      .catch((error) => {
        const message = error.message;
        const user = {
          message: message,
        };
        setLoggedIn(user);
      });
  };

  const handleFacebook = () => {
    signInWithFacebook()
      .then((user) => {
        setLoggedIn(user);
        setTimeout(() => {
          history.replace(from);
        }, 1500);
      })
      .catch((error) => {
        const message = error.message;
        const user = {
          message: message,
        };
        setLoggedIn(user);
      });
  };

  // STATE: USING FOR PASSWORD INPUTS VALIDATION
  const [password, setPassword] = useState();

  // ON BLUR HANDLE VALIDATION FUNCTION
  const handleValidation = (e) => {
    if (newUser && e.target.name === "email") {
      const email = e.target.value;
      const re = /\S+@\S+\.\S+/;
      const validation = re.test(email);
      const isValid = validation ? true : false;
      setIsEmailValid(isValid);
    }

    if (e.target.name === "password" && newUser) {
      setPassword(e.target.value);
    }

    if (newUser && e.target.name === "password2") {
      const password2 = e.target.value;
      const isValid = password === password2 ? true : false;
      setIsPasswordValid(isValid);
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        {newUser ? (
          <h3 className="text-center mb-4">Create an account</h3>
        ) : (
          <h3 className="text-center mb-4">Login</h3>
        )}

        {newUser && (
          <input
            placeholder="Type Your Name"
            className="login-form-field"
            name="name"
            ref={register({ required: true })}
          />
        )}

        {errors.name && (
          <span className="ml-4 text-danger">This field is required</span>
        )}

        <input
          onBlur={handleValidation}
          placeholder="Type Your Email"
          className="login-form-field"
          type="email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className="ml-4 text-danger">This field is required</span>
        )}
        {isEmailValid === false && (
          <span className="ml-4 text-danger">This is not correct!</span>
        )}
        <input
          onBlur={handleValidation}
          placeholder="Type Your Password"
          className="login-form-field"
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <span className="ml-4 text-danger">This field is required</span>
        )}
        {newUser && (
          <input
            onBlur={handleValidation}
            placeholder="Confirm Your Password"
            className="login-form-field"
            type="password"
            name="password2"
            ref={register({ required: true })}
          />
        )}
        {errors.password2 && (
          <span className="ml-4 text-danger">This field is required</span>
        )}
        {isPasswordValid === false && (
          <span className="ml-4 text-danger">Password doesn't match!</span>
        )}
        <input className="btn btn-outline-info m-4" type="submit" />

        <div className="d-flex justify-content-center">
          {newUser ? (
            <p className="ml-4">Already have an account?</p>
          ) : (
            <p className="ml-4">Create an account</p>
          )}

          {newUser ? (
            <label className="ml-1 text-info" htmlFor="login-check">
              Login
            </label>
          ) : (
            <label className="ml-1 text-info" htmlFor="login-check">
              Sign up
            </label>
          )}
          <input
            onChange={() => setNewUser(!newUser)}
            type="checkbox"
            name="login-check"
            id="login-check"
            className="d-none"
          />
        </div>
      </form>

      {/* ////////////////// social login buttons//////////////////  */}
      <div className="text-center social-box p-4">
        <button onClick={handleFacebook} className="btn btn-info btn-block">
          <span className="pr-2">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          Continue with Facebook
        </button>

        <button onClick={handleGoogle} className="btn btn-info btn-block">
          <span className="pr-2">
            <FontAwesomeIcon icon={faGoogle} />
          </span>
          Continue with Google
        </button>
      </div>

      {/* //////////////////// error or successful message /////////////////// */}

      {loggedIn?.email && newUser && (
        <p className="text-center text-success p-1">Sign in successful</p>
      )}

      {loggedIn?.email && !newUser && (
        <p className="text-center text-success p-1">Login successful</p>
      )}

      {loggedIn?.message && (
        <p className="text-center text-danger">{loggedIn.message}</p>
      )}
    </div>
  );
};

export default Login;
