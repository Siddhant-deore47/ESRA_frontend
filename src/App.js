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
import AddNewHospital from "./components/dashboard/AddNewHospital";
import AddPoliceStation from "./components/dashboard/AddPoliceStation";
import NearestHospital from "./components/NearestHospital";
import ViewHospital from "./components/dashboard/ViewHospital";
import ViewPoliceStation from "./components/dashboard/ViewPoliceStation";
import ViewFeedback from "./components/dashboard/ViewFeedback";
import ViewReportList from "./components/dashboard/ViewReportList";
import { AdminPrivateRoute } from "./components/AdminPrivateRoute";
import MyProfile from "./components/dashboard/MyProfile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />

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
          <Route path="/admin" exact element={<AdminPrivateRoute />}>
            <Route path="dashboard" exact element={<Dashboard />}></Route>
            <Route
              path="addnewhospital"
              exact
              element={<AddNewHospital />}
            ></Route>
            <Route
              path="addpolicestation"
              exact
              element={<AddPoliceStation />}
            ></Route>
            <Route
              path="nearesthospital"
              exact
              element={<NearestHospital />}
            ></Route>
            <Route path="viewhospital" exact element={<ViewHospital />}></Route>
            <Route
              path="viewpolicestation"
              exact
              element={<ViewPoliceStation />}
            ></Route>
            <Route path="viewfeedback" exact element={<ViewFeedback />}></Route>
            <Route
              path="viewreportlist"
              exact
              element={<ViewReportList />}
            ></Route>
            <Route path="myprofile" exact element={<MyProfile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
