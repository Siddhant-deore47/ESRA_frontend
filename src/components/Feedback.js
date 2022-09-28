import { useState } from "react";
import { toast } from "react-toastify";
import { SubmitFeedback } from "../services/userServices";
import Base from "./Base";
import Footer from "./Footer";

function Feedback() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: "",
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
      name: "",
      email: "",
      mobile: "",
      comment: "",
    });
  };

  //  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    SubmitFeedback(data)
      .then((response) => {
        console.log(response);
        toast.success("Feedback Submitted");
      })
      .catch((error) => {
        console.log(error);
        toast.error("error..!");
      });
    setData({
      name: "",
      email: "",
      mobile: "",
      comment: "",
    });
  };

  return (
    <div>
      <Base />

      <div class="d-flex justify-content-center">
        <h3 class="fw-normal display-6 pt-4" style={{ letterspacing: "1px" }}>
          <strong>Feedback</strong>
        </h3>
      </div>

      <div>
        <section class="vh-80">
          <form onSubmit={handleFormSubmit}>
            <div class="container h-90">
              <div class="row d-flex justify-content-center align-items-center h-90">
                <div class="col-xl-9">
                  <div class="card" style={{ borderradius: "15px" }}>
                    <div class="card-body">
                      <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                          <h6 class="mb-0">Full name</h6>
                        </div>

                        <div class="col-md-9 pe-5">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            onChange={InputEvent}
                            value={data.name}
                            placeholder="Enter Full Name"
                            required
                          />
                        </div>
                      </div>

                      <hr class="mx-n3" />

                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
                          <h6 class="mb-0">Email address</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                          <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            class="form-control"
                            placeholder="Enter Email Address"
                            required
                          />
                        </div>
                      </div>

                      <hr class="mx-n3" />

                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
                          <h6 class="mb-0">Mobile No.</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                          <input
                            type="text"
                            name="mobile"
                            value={data.mobile}
                            class="form-control"
                            onChange={InputEvent}
                            placeholder="Enter Mobile No."
                            required
                          />
                        </div>
                      </div>

                      <hr class="mx-n3" />

                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
                          <h6 class="mb-0">Message</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                          <textarea
                            class="form-control"
                            rows="3"
                            name="comment"
                            value={data.comment}
                            onChange={InputEvent}
                            placeholder="Type Message Here"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <hr class="mx-n3" />

                      <div class="px-5 py-4">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Send Feedback
                        </button>
                        <button
                          type="reset"
                          class="btn btn-danger btn-lg mx-4"
                          onClick={resetData}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
      <p class="p-2"></p>
      <Footer />
    </div>
  );
}

export default Feedback;
