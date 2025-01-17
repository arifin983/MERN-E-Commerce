import React, { Fragment, useState, useEffect } from "react";
import "../css/ForgotPassword.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Loader from "./Loader";
import MetaData from "../../components/MetaData";
import { forgotPassword } from "../../store/actions/userActions";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    // const myForm = new FormData();

    // myForm.set("email", email);
    dispatch(forgotPassword(email));
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
              </form>
              {message && (
                <Alert className="alert" severity="success">
                  {message}
                </Alert>
              )}
              {error && (
                <Alert className="error" variant="filled" severity="error">
                  Error:{error}
                </Alert>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPassword;
