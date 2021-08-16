import React from "react";
import StringCrypto from 'string-crypto';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  var QRCode = require('qrcode.react');

export default function Print() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const {
      encryptString,
      decryptString,
    } = new StringCrypto();
    let encryptedString = encryptString(id, "AJxeBab]Amu8.S^.evEE`=pg`Npe@\-f");
    console.log("Hasil enkripsi AES",encryptedString)

    setTimeout(function(){
      window.print()
    }, 1);
  
    return (
      <div id="section-to-print">
        <h3> {id === "admin" ? null : id}</h3>
        <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
          }
        >
          <div className="rounded-t mb-0 px-0 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <p id="section-to-print" align='center'><QRCode value={encryptedString} />
                  </p>
      
                
              </div>
            </div>
          </div>
          </div>
      </>
        
      </div>


     



    );
    
  }