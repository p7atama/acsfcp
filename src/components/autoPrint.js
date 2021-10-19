import React from "react";
import diom from '../abis/diom.json';
import Web3 from 'web3'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/19148326cb674857b80044d7d6876ad3"));
// var address = "0x8cf7be6a443eafed3e89d439d6e389542732384d";
var address = "0x611fa63aad98a57ff096034335e5c96a1d223e0c";
var contract = new web3.eth.Contract(diom.abi, address);
  var QRCode = require('qrcode.react');

export default function autoPrint() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    setTimeout(function(){
      window.print()
    }, 1);
  
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
                  <p id="section-to-print" align='center'><QRCode value={'https://acsfcpapi.vercel.app/api/test/'+id} />
                  </p>
      
                
              </div>
            </div>
          </div>
          </div>
      </>
        
      </div>


     



    );
    
  }