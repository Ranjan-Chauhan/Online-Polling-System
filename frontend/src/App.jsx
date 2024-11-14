import { useState } from "react";
import Home from "./components/Home";
import CreatePoll from "./components/CreatePoll";
import ConfirmationPage from "./components/ConfirmationPage";
import PollsList from "./components/PollsList";
import PollsDetails from "./components/PollsDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpoll" element={<CreatePoll />} />
          <Route path="/pollslist" element={<PollsList />} />
          <Route path="/polldetails" element={<PollsDetails />} />
          <Route path="/polldetails/:pollId" element={<PollsDetails />} />
          <Route path="/confirmationpage" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
