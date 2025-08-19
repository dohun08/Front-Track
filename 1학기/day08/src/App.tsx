import "./index.css";
import React, { useCallback, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NoPage from "./components/Nopage";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Detail from './components/Detail'
import Home from "./components/Home";
import Dong from './components/dong.tsx'
import { Rooms } from "./rooms.ts";
import FormPostExample from "./axiosTest.tsx";

export interface MyContextType {
  theme : boolean;
  toggleTheme : ()=>void
}

export const Context1 = React.createContext<MyContextType | null>(null);

export default function App() {
  const [theme, setTheme] = useState(false)
  const toggleTheme = useCallback(()=>{
    setTheme(!theme)
  }, [theme])
  const rooms = Rooms
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="*" element = {<NoPage />} />
        <Route path="/card" element={<Card {...rooms[0]}/>} />
        <Route path="/cardlist" element={<CardList data={Rooms} />} />
        <Route path="/detail/:id" element={
          <Context1.Provider value = {{theme, toggleTheme}}>
            <Detail/>
          </Context1.Provider>
        } />
        <Route path="/dong" element={<Dong />} />
        <Route path="/form" element={<FormPostExample />} />
      </Routes>
    </div>

  );

}