import "./index.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NoPage from "./components/Nopage";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Home from "./components/Home";
import { Rooms } from "./rooms";

export default function App() {
  const rooms = Rooms
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="*" element = {<NoPage />} />
        <Route path="/cardlist" element={<CardList data={rooms} />} />
        <Route path="/card" element={<Card {...rooms[0]} />} />
      </Routes>
    </div>

  );

}