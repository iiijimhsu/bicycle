import React, { useState, useEffect } from 'react'
import { getData } from '../src/api'
import jsSHA from "jssha";
import axios from "axios";

export default function App() {
  const [test,setTest]=useState([])
  const [testButton,setTestButton]=useState(false)
  useEffect(()=>{
    getData("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip?%24top=30&%24format=JSON",setTest)
    console.log("test",test)
  },[testButton])

  // axios.get(
  //   "https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip?%24top=30&%24format=JSON",
  //   {
  //     headers: getAuthorizationHeader()
  //   }
  // )
  //   .then(function (response) {
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // function getAuthorizationHeader() {
  //   //  填入自己 ID、KEY 開始
  //   let AppID = 'a465ec9e862b4c6cb1388215b593a2d0';
  //   let AppKey = 'D1VEDZ9dYJ6pkyxDK2QzK47GY3I';
  //   //  填入自己 ID、KEY 結束
  //   let GMTString = new Date().toGMTString();
  //   let ShaObj = new jsSHA('SHA-1', 'TEXT');
  //   ShaObj.setHMACKey(AppKey, 'TEXT');
  //   ShaObj.update('x-date: ' + GMTString);
  //   let HMAC = ShaObj.getHMAC('B64');
  //   let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
  //   return { 'Authorization': Authorization, 'X-Date': GMTString };
  // }


  return (
    <>
      <div>hello,React</div>
      <button onClick={()=>{
        setTestButton(!testButton)
      }}>test</button>

    </>
  )
}
