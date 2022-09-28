import Base from "./Base";
import Footer from "./Footer";
function Feedback() {
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
                          placeholder="Enter Full Name"
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
                          class="form-control"
                          placeholder="Enter Email Address"
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
                          placeholder="Type Message Here"
                        ></textarea>
                      </div>
                    </div>

                    <hr class="mx-n3" />

                    <div class="px-5 py-4">
                      <button type="submit" class="btn btn-primary btn-lg">
                        Send Feedback
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p class="p-2"></p>
      <Footer />
    </div>
  );
}

export default Feedback;
