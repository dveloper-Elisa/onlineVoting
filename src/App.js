import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import VoterSignup from "./pages/voterRegister.jsx";
import CompetitionCandidate from "./pages/candidatesAll.jsx";
import RegisterCandidate from "./pages/registerCandiadte.jsx";
import Dashboard from "./admin/admindashboard.jsx";
import AdminLogin from "./admin/adminLogin.jsx";
import NotFound from "./pages/notFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/adminLogin" Component={AdminLogin} />
        <Route path="/voter-signup" Component={VoterSignup} />
        <Route path="/candidates" Component={CompetitionCandidate} />
        <Route path="/addcandidate" Component={RegisterCandidate} />
        <Route path="/admin-dashboard" Component={Dashboard} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
