import React, { useState } from "react";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import "./App.css";
import Image from "./Image";
import Headers from "./Headers";
import Footer from "./Footer"
import Explanation from "./Explanation"


function App() {
  const [veriNasa, setNasaVeri] = useState("");

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2022-09-24")
      .then((response => {
        setNasaVeri(response.data);
        console.log("success", response.data);
      }))
      .catch((response) => {
        console.log("failed", response)
      })

  }, [])


  return (
    <div className="App">
      <Headers veri={veriNasa}></Headers>
      <Image resimURL={veriNasa.url} ></Image>
      <Footer isim = {veriNasa.copyright}></Footer>
      <Explanation aciklama= {veriNasa.explanation}></Explanation>
    </div>
  );
}

export default App;
