import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chrome } from "./Pages/SocialMedia/Chrome/Chrome";
import { Welcome } from "./Pages/Firstpage/Welcome";
import { Facebook } from "./Pages/SocialMedia/Facebook/Facebook";
import { Apple } from "./Pages/SocialMedia/Apple/Apple";
import { CreateAccount } from "./Pages/CreateAccount/CreateAccount";
import { Choose } from "./Pages/Choose/Choose";
import { Book } from "./Pages/Book/book";
import { Map } from "./Pages/Map/Map";
import { Chat } from "./Pages/Chat/Chat";
import { Profile } from "./Pages/Profile/Profile";
import { AuthForm } from "./Pages/Login-Signup/Authform";
import { DriverForm } from "./Pages/DriverForm/DriverForm";
function App() {
  return (
    <>
      <main className="backRound"></main>
      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Chrome" element={<Chrome />} />
        <Route path="/Facebook" element={<Facebook />} />
        <Route path="/Apple" element={<Apple />} />
        <Route path="/Create" element={<CreateAccount />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/DriverForm" element={<DriverForm />} />
      </Routes>
    </>
  );
}

export default App;
