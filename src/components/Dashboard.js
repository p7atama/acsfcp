import React, { Component } from "react";
import './App.css';
import Acsfcp from '../abis/Acsfcp.json';
import diom from '../abis/diomimg.json';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
//import { Container } from './Container';
import Web3 from 'web3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
//import TableDropdown from "./TableDropdown.js";
import Loading from "./Loading";
//import ReactToPrint from 'react-to-print';
//import { Print } from './Print';
const triggerText = 'QR Code';
const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/19148326cb674857b80044d7d6876ad3"));
// var address = "0x8cf7be6a443eafed3e89d439d6e389542732384d";
// var address = "0xd1c5547e0ef3e822095e5ba0c6366d256fac7586";
 var address = "0x611fa63aad98a57ff096034335e5c96a1d223e0c";

var contract = new web3.eth.Contract(diom.abi, address);
const color = "light";
const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
// components


class Dashboard extends Component {
  
  constructor(props) {
    super(props)
   
    this.state = {
      productCount: 0,
      cloths: [],
      loading: true,
      id: 0
    }
  }

  async componentWillMount() {
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const acsfcp = web3.eth.Contract(diom.abi, address)

    this.setState({ acsfcp })
    const productCount = await contract.methods.productCount().call()
    const testnama = await acsfcp.methods.name().call()
    console.log("test product ",productCount.toNumber())


    this.setState({ productCount })
    // Load products
    for (var i = 1; i <= productCount; i++) {
      const cloth = await acsfcp.methods.cloths(i).call().then(console.log());
      this.setState({
        cloths: [...this.state.cloths, cloth]
      })
    }      this.setState({ loading: false})
    console.log("Data Produk : ",this.state.cloths)
    
    

  }
 
  
  
  render() {
    if (this.state.loading == true) {
      console.log("Lagi loading");
   
      return <Loading />;
      
    }
    return (
      
      <div className="App">
      <div id="content">
      <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-0 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                Product List
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="table-auto items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className={
                      "px-0 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    No
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Name
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Product Image
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Shop Name
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Size
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Material
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >Type</th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >Action</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.cloths.map((cloth, key) => {
                return(
                <tr key={key}>
                  <th scope="row" className="border-t-0 pl-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                    
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light" ? "text-blueGray-600" : "text-white")
                      }
                    >{cloth.id.toString()}
                      
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {cloth.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img src={`${cloth.hashImage}`} width="100px" />
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {cloth.shop_name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                    {cloth.size}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                    {cloth.material}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                    {cloth.tipe}
                    
                    </div>
                  </td>
                  <td className="border-t-0 px-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0 text-center">
                  {/* <Container triggerText={triggerText} forwardID={cloth.id} onSubmit={onSubmit} /> */}
                  <Router> <a href={"/print/"+cloth.id}>Print QRCode</a>
                  <Switch>
          <Route path="/print/:id" />
        </Switch>
    </Router>
                  </td>
                </tr>
                  )
                })} 
              </tbody>
            </table>
          </div>
        </div>
      </>
      </div>
        </div>
        
    );
  }
}
export default Dashboard;

