import React from 'react';
import Cookies from 'js-cookie'

export default function Landing() {

function mint(){
  var a = Cookies.get('_SeekUser');
    console.log("mint page cookie",a);
    if(a === '1' || a === '2' || a === '3'){
        console.log("Mint Page");
        window.location.href = 'https://www.seeknft.com/byu/upload';
    } else {
      window.location.href = 'https://www.seeknft.com/byu/login';
    }

}


  return <>
    <button onClick={mint}>Mint</button>
  </>
}
