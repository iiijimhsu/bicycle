import jsSHA from "jssha";
import axios from "axios";
export function getData(api,setData){
    axios.get(
        api,
      {
         headers: getAuthorizationHeader()
      }
   )
   .then(function (response) {
    setData(response.data)
   })
   .catch(function (error) {
     console.log(error);
   }); 
}
export function getNearByData(api,setData){
    axios.get(api).then(function(response){
        setData(response.data.results[0].formatted_address)
    }).catch(function(error){
        console.log(error)
    })
}

function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
        let AppID = 'a465ec9e862b4c6cb1388215b593a2d0';
        let AppKey = 'D1VEDZ9dYJ6pkyxDK2QzK47GY3I';
    //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }
