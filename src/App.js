import React, { useState, useEffect } from 'react'
import { getData } from '../src/api'
import Lottie from "react-lottie";
import centerImage from "../src/youbike.json";


export default function App() {
  const [test, setTest] = useState([])
  const [testButton, setTestButton] = useState(false)
  useEffect(() => {
    getData("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip?%24top=30&%24format=JSON", setTest)
    console.log("test", test)
  }, [testButton])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: centerImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <>
      <div>hello,React</div>
      <button onClick={() => {
        setTestButton(!testButton)
      }}>test</button>
      <Lottie
        options={defaultOptions}
        height={110}
        width={200}
      />
    </>
  )
}
