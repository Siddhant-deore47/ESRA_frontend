import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useEffect } from "react";

import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const AdminLogin = () => {
  const [loading, setLoading] = useState(true);

  const homeNavLinks = [
    { linkUrl: "/", linkName: "Home", classNames: "" },
    { linkUrl: "/login", linkName: "Login", classNames: "active" },
    { linkUrl: "/about", linkName: "About", classNames: "" },
  ];
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const [inputs, setInputs] = useState({});

  const [loginPageToggler, setLoginPageToggler] = useState(false);

  const [loginNameElement, setLoginNameElement] = useState({
    user: "CANDIDATE",
    otherUser: "Admin",
    loginName: "Email",
    inputType: "email",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setLoading(true);
      loadUserDetails();
      setTimeout(() => {
        setLoading(false);
      }, 800);
    } else {
      setLoading(false);
    }
  }, []);

  const loadUserDetails = () => {
    axios
      .get(`http://localhost:8080/current-user`, config)
      .then((response) => {
        console.log(response.data.username);
        if (response.data.username.includes("@")) {
          navigate("/candidate/");
        } else {
          navigate("/admin/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Token invalid, you've been logged out!");
        navigate("/login");
      });
  };

  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    axios
      .post("http://localhost:8080/login", inputs)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          setLoading(false);
        }, 600);
        if (!loginPageToggler) navigate("/candidate");
        else navigate("/admin");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  let candidateRegisterLink = null;
  if (!loginPageToggler) {
    candidateRegisterLink = (
      <div className="m-2 mt-3 d-flex justify-content-center">
        {/* <Link className="btn btn-sm text-light me-5" to="">Forgot password?</Link> */}
        <Link className="btn btn-sm text-light ms-2" to="/register">
          New user? Register here
        </Link>
      </div>
    );
  } else {
    candidateRegisterLink = null;
  }

  const toggleLoginPageHandler = () => {
    if (loginPageToggler)
      setLoginNameElement({
        user: "CANDIDATE",
        otherUser: "Admin",
        loginName: "Email",
        inputType: "email",
      });
    else
      setLoginNameElement({
        user: "ADMIN",
        otherUser: "Candidate",
        loginName: "Admin name",
        inputType: "text",
      });
    setLoginPageToggler(!loginPageToggler);
  };

  return (
    <>
      <Navbar linkNames={homeNavLinks} />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-75">
          <PropagateLoader color="#3643a3" loading={loading} size={50} />
        </div>
      ) : (
        <>
          <Header title="Login" />
          <p className=" text-end me-3">
            <button
              className="btn btn-outline-primary"
              onClick={toggleLoginPageHandler}
            >
              Click here for {loginNameElement.otherUser} login
            </button>
          </p>
          <div className="d-flex justify-content-center mb-5">
            <div
              className="rounded mt-0 p-3 shadow-lg"
              style={styles.loginForm}
            >
              <h4 className="text-center text-light">
                {loginNameElement.user}
              </h4>
              <hr></hr>
              <form onSubmit={handleSubmit}>
                <div className="m-2">
                  <label className="form-label text-light">
                    {loginNameElement.loginName}
                  </label>
                  <input
                    type={loginNameElement.inputType}
                    className="form-control"
                    style={styles.inputs}
                    name="username"
                    onChange={handleChange}
                    value={inputs.username}
                  />
                </div>
                <div className="m-2">
                  <label className="form-label text-light">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    style={styles.inputs}
                    name="password"
                    onChange={handleChange}
                    value={inputs.password}
                  />
                </div>
                <div className="m-2 mt-4 d-flex justify-content-center">
                  <button
                    className="btn btn-lg btn-outline-light rounded-pill text-light"
                    style={{ backgroundColor: "#3643a3" }}
                  >
                    Login
                  </button>
                </div>
                {candidateRegisterLink}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const styles = {
  loginForm: {
    width: "33vw",
    minWidth: "400px",
    borderColor: "#3643a3",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#3643a3",
  },
  inputs: {
    borderColor: "#3643a3",
    borderWidth: 1,
    borderStyle: "solid",
  },
};

export default AdminLogin;
