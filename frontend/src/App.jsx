import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chrome } from "./Pages/Chrome/Chrome";
import { Welcome } from "./Pages/Firstpage/Welcome";
function App() {
  return (
    <>
      <main className="backRound"> </main>
      <Router>
        <Routes>
          <Route path="/" Component={Chrome} />
          <Route path="/Welcome" element={Welcome} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
