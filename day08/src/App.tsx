import "./index.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NoPage from "./components/Nopage";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Detail from './components/Detail'
import Home from "./components/Home";
import Dong from './components/dong'
import { Rooms } from "./rooms";
import FormPostExample from "./axiosTest";

export default function App() {
  const rooms = Rooms
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="*" element = {<NoPage />} />
        <Route path="/card" element={<Card {...rooms[0]}/>} />
        <Route path="/cardlist" element={<CardList data={Rooms} />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/dong" element={<Dong />} />
        <Route path="/form" element={<FormPostExample />} />
      </Routes>
    </div>

  );

}