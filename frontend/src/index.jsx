/* @refresh reload */
import { render } from 'solid-js/web';
import {lazy} from "solid-js"
import { Router, Route, Routes } from "@solidjs/router";
import App from "./App";
import './index.css';
const SchoolSelection=lazy(()=>import("./Pages/SchoolSelection"));
const MajorList=lazy(()=>import("./Pages/MajorList"));
const Register=lazy(()=>import("./Pages/Register"));
const ViewMajor=lazy(()=>import("./Pages/ViewMajor"));
render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} /> {/* 👈 Define the home page route */}
        <Route path="/Pages/SchoolSelection" component={SchoolSelection} /> 
        <Route path="/Pages/MajorList" component={MajorList} /> 
        <Route path="/Pages/Register" component={Register} /> 
        <Route path="/Pages/ViewMajor" component={ViewMajor} /> 
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
