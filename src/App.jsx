import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUpPage";
import { SignedIn, RedirectToSignIn } from "@clerk/clerk-react";
import FakeNews from "./pages/FakeNews";
import PhysingDetector from "./pages/PhysingDetector";
import Layout from "./layout"
import CyberBully from "./pages/CyberBully";
import ReportIncident from "./components/CyberBully/ReportIncident";
import TalkToSomeone from "./components/CyberBully/TalkToSomeone";

function App() {
  return (
    <Routes>
      <Route path="/" element={
          <SignedIn>
            <Landing/>
          </SignedIn>
      } />
      <Route
        path="/home"
        element={<Home/>}
      />
      <Route
        path="/home"
        element={<RedirectToSignIn />}
      />
      <Route element={<Layout/>}>
       <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/fakenews"element={<FakeNews/>}/>
       <Route path="/phishing" element={<PhysingDetector />} />
       <Route path="/cyberbullying"element={<CyberBully/>}/>
       <Route path="/report-incident"element={<ReportIncident/>}/>
       <Route path="/TalkToSomeone" element={<TalkToSomeone/>}/>
      </Route>
      
       </Routes>
  );
}

export default App;
