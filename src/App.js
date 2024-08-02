import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header.jsx";
import Footer from "./layout/footer.jsx";
import Login from "./pages/login.jsx";
import VoterSignup from "./pages/voterRegister.jsx";
import CompetitionCandidate from "./pages/candidatesAll.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/voter-signup" Component={VoterSignup} />
        <Route path="/candidates" Component={CompetitionCandidate} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
