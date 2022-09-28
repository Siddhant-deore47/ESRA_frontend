import React from "react";
import Base from "./Base";
import Footer from "./Footer";

function NearestHospital() {
  return (
    <div>
      <Base />
      <div className="pt-2 mt-2">
        <table class="table table-warning table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hospital Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Alt No.</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">District</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{localStorage.getItem("nearestHospitalName")}</td>
              <td>{localStorage.getItem("nearestHospitalEmail")}</td>
              <td>{localStorage.getItem("nearestHospitalMobile")}</td>
              <td>{localStorage.getItem("nearestHospitalAltMobile")}</td>
              <td>{localStorage.getItem("nearestHospitalStreet")}</td>
              <td>{localStorage.getItem("nearestHospitalState")}</td>
              <td>{localStorage.getItem("nearestHospitalDistrict")}</td>
              <td>{localStorage.getItem("nearestHospitalCity")}</td>
              <td>{localStorage.getItem("nearestHospitalCountry")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default NearestHospital;
