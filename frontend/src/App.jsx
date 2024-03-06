import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Navbar/navbar";
import { Book } from "./Pages/Book/book";
import { Choose } from "./Pages/Choose/Choose";
import "./App.scss";

function App() {
  return (
    <>
      <main className="backRound"> </main>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" Component={Choose} />
          <Route path="/Book" element={Book} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
