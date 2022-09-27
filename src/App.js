import "./App.css";
import AboutUs from "./components/AboutUs";
import Feedback from "./components/Feedback";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import ReportAccident from "./components/ReportAccident";
import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/dashboard/Dashboard";
import Hospital from "./components/Hospital";
import VehicleInfo from "./components/VehicleInfo";
import PoliceStation from "./components/PoliceStation";
import { GeoLocation } from "./components/GeoLocation";
import { PrivateRoute } from "./components/PrivateRoute";
import { NearestHospital } from "./components/NearestHospital";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/aboutus" exact element={<AboutUs />}></Route>
          <Route
            path="/reportaccident"
            exact
            element={<ReportAccident />}
          ></Route>
          <Route path="/feedback" exact element={<Feedback />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/signin" exact element={<SignIn />}></Route>
          <Route path="/hospital" exact element={<Hospital />}></Route>
          <Route path="/vehicleinfo" exact element={<VehicleInfo />}></Route>
          <Route path="/accident" exact element={<ReportAccident />}></Route>
          <Route path="nearestHospital" element={<NearestHospital />}></Route>
          <Route path="/admin" exact element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route
            path="/policestation"
            exact
            element={<PoliceStation />}
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* <HomePage/>
      <br></br>
      <AboutUs/>
      <br></br>
      <ReportAccident/>
      <br></br>
      <Feedback/>
      <br></br>
      <SignIn/>
      <br></br>
      <Register/> */}
    </div>
  );
}

export default App;
