import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chrome } from "./Pages/SocialMedia/Chrome/Chrome";
import { Welcome } from "./Pages/Welcome/Welcome";
import { Facebook } from "./Pages/SocialMedia/Facebook/Facebook";
import { Apple } from "./Pages/SocialMedia/Apple/Apple";
import { CreateAccount } from "./Pages/CreateAccount/CreateAccount";
import { Choose } from "./Pages/Choose/Choose";
import { Map } from "./Pages/Map/Map";
import { Chat } from "./Pages/Chat/Chat";
import { Profile } from "./Pages/Profile/Profile";
import { AuthForm } from "./Pages/Login-Signup/Authform";
import { DriverForm } from "./Pages/DriverForm/DriverForm";
import { CarForm } from "./Pages/CarForm/CarForm";
import { Logo } from "./Pages/Logo/Logo";
import { Policy } from "./Pages/Policy/Policy";
import { Show } from "./Pages/Show/Show";
import { WaitingTrips } from "./Pages/WaitingTrips/WaitingTrips";
import { Details } from "./Pages/Details/Details";
import { Upcomming } from "./Pages/Upcomming/Upcomming";
import { Cancel } from "./Pages/Cancel/Cancel";
import { Last } from "./Pages/LastPage/Last";
import { DriverWait } from "./Pages/DriverWait/DriverWait";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Chrome" element={<Chrome />} />
        <Route path="/Facebook" element={<Facebook />} />
        <Route path="/Apple" element={<Apple />} />
        <Route path="/Create" element={<CreateAccount />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/DriverForm" element={<DriverForm />} />
        <Route path="/CarForm" element={<CarForm />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/WaitingTrips" element={<WaitingTrips />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Upcoming" element={<Upcomming />} />
        <Route path="/Cancel" element={<Cancel />} />
        <Route path="/Last" element={<Last />} />{" "}
        <Route path="/DriverWait" element={<DriverWait />} />
      </Routes>
    </>
  );
}

export default App;
