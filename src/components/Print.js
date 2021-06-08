import React from "react";

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
  
    return (
      <div id="section-to-print">
        <h3> {id === "admin" ? null : id,console.log(id)}</h3>
        <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
          }
        >
          <div className="rounded-t mb-0 px-0 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <p id="section-to-print" align='center'><QRCode value={id} /></p>
        <p align="center"><button onClick={() => window.print()}
  className="bg-indigo-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-6" type="button" >
Print </button></p>
                
              </div>
            </div>
          </div>
          </div>
      </>
        
      </div>


     



    );
    
  }