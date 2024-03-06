import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chrome } from "./Pages/Chrome/Chrome";
import { Welcome } from "./Pages/Firstpage/Welcome";
import { Test } from "./backend/test";
import { Login } from "./backend/auth/auth";


function App() {
  return (
    <>
      <main className="backRound"> </main>
        <Routes>
          <Route path="/" element={<Chrome />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/test" element={<Test />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
