import React from "react";
export const NearestHospital = () => {
  return (
    <>
      <div>
        {localStorage.getItem("nearestHospitalName")}
        <br></br>
        {localStorage.getItem("nearestHospitalEmail")}
        <br></br>
        {localStorage.getItem("nearestHospitalMobile")}
        <br></br>
        {localStorage.getItem("nearestHospitalAltMobile")}
        <br></br>
        {localStorage.getItem("nearestHospitalCity")}
        <br></br>
        {localStorage.getItem("nearestHospitalCountry")}
        <br></br>
        {localStorage.getItem("nearestHospitalState")}
        <br></br>
        {localStorage.getItem("nearestHospitalDistrict")}
        <br></br>
        {localStorage.getItem("nearestHospitalStreet")}
        <br></br>
      </div>
    </>
  );
};
