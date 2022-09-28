import { useState } from "react";
import Base from "./Base";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Login } from "../services/userServices";
import { doLogin } from "../auth/auth";
import Footer from "./Footer";

const SignIn = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const resetData = () => {
    setData({
      username: "",
      password: "",
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    if (data.username.trim === "" || data.password.trim === "") {
      toast.error("Username or Password required !");
      return;
    }

    Login(data)
      .then((responseData) => {
        console.log("Logged In !");
        toast.success("Logged In !");
        console.log(responseData.token);

        doLogin(responseData, () => {
          localStorage.setItem("token", responseData.token);
          console.log("data saved");
          navigate("/admin/dashboard");
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404)
          toast.error(error.response.data.message);
        else {
          toast.error("Error");
        }
      });
  };

  return (
    <div>
      <Base />
      <p className="p-2"></p>
      <div className="">
        <section className="vh-80 ">
          <div className="d-flex align-items-center h-80">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-80">
                <div className="col-sm-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-2">
                      <h2 className="text-uppercase text-center mb-4">
                        Sign In
                      </h2>
                      <form onSubmit={handleFormSubmit} method="POST">
                        <div className="row">
                          <div className="col-5">
                            <label className="form-label" for="email1">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email1"
                              name="username"
                              className="form-control form-control-sm"
                              value={data.username}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                          <div className="col-5">
                            <label className="form-label" for="password1">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password1"
                              name="password"
                              className="form-control form-control-sm"
                              value={data.password}
                              onChange={InputEvent}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center pt-4">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block btn-md text-body mx-3"
                          >
                            Sign In
                          </button>
                          <button
                            type="reset"
                            onClick={resetData}
                            className="btn btn-danger btn-block btn-md text-body"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p className="p-1"></p>
      <Footer />
    </div>
  );
};

export default SignIn;
