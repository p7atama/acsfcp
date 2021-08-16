import React, { Component } from 'react';
//import { Redirect } from "react-router-dom";
//import Admin from './Admin';
import './App.css';
import diom from '../abis/diomimg.json';
import Web3 from 'web3'
import Loading from "./Loading";

//import { Container } from './Container';
//import TableDropdown from "./TableDropdown.js";
const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/19148326cb674857b80044d7d6876ad3"));
// var address = "0x8cf7be6a443eafed3e89d439d6e389542732384d";
// address, contract diom.sol
// var address = "0xd1c5547e0ef3e822095e5ba0c6366d256fac7586";
// var contract = new web3.eth.Contract(diom.abi, address);
var address = "0x611fa63aad98a57ff096034335e5c96a1d223e0c";
var contract = new web3.eth.Contract(diom.abi, address);
const triggerText = 'QR Code';
const color = "light";
  
  
class Main extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      loading: false,
      productCount: 0,
      ipfsHash: '',
      buffer: null,
      newurl: ''
    }
    this.captureFile = this.captureFile.bind(this);
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
  }
  async captureFile(event) {
    event.preventDefault()
    const ipfs = window.IpfsHttpClient.create('https://ipfs.infura.io:5001/api/v0')
    console.log(ipfs)
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
    const added =  await ipfs.add(file).then(console.log(added))
    console.log("added path : ",added.path)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      this.setState({ newurl: url  })
  }
  render() {
    if (this.state.loading == true) {
      console.log("Lagi loading");
   
      return <Loading />;
      
    }
    return (
      // <div className="App">
      // <div id="content">
      //   <form onSubmit={(event) => {
      //     event.preventDefault()
      //     const name = this.clothName.value
      //     const shop_name = this.clothShop.value
      //     const size = this.clothSize.value
      //     const material = this.clothMaterial.value
      //     const tipe = this.clothTipe.value
      //     this.props.createCloth(name, shop_name, size, material, tipe)
      //   }}>
      //     <div className="form-group mr-sm-2">
      //       <input
      //         id="clothName"
      //         type="text"
      //         ref={(input) => { this.clothName = input }}
      //         className="form-control"
      //         placeholder="Cloth Name"
      //         required />
      //     </div>
      //     <div className="form-group mr-sm-2">
      //       <input
      //         id="clothShop"
      //         type="text"
      //         ref={(input) => { this.clothShop = input }}
      //         className="form-control"
      //         placeholder="Cloth Shop Name"
      //         required />
      //     </div>
      //     <div className="form-group mr-sm-2">
      //       <input
      //         id="clothSize"
      //         type="text"
      //         ref={(input) => { this.clothSize = input }}
      //         className="form-control"
      //         placeholder="Cloth Size"
      //         required />
      //     </div>
      //     <div className="form-group mr-sm-2">
      //       <input
      //         id="clothMaterial"
      //         type="text"
      //         ref={(input) => { this.clothMaterial = input }}
      //         className="form-control"
      //         placeholder="Cloth Material"
      //         required />
      //     </div>
      //     <div className="form-group mr-sm-2">
      //       <input
      //         id="clothTipe"
      //         type="text"
      //         ref={(input) => { this.clothTipe = input }}
      //         className="form-control"
      //         placeholder="Cloth Type"
      //         required />
      //     </div>

      //     <button type="submit" className="btn btn-primary">Add Cloth</button>
      //   </form>
      //   <p>&nbsp;</p>
        
      // </div>

      
      // </div>
      

      <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Input the data</small>
                </div>
                <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.clothName.value
          const shop_name = this.clothShop.value
          const size = this.clothSize.value
          const material = this.clothMaterial.value
          const tipe = this.clothTipe.value
          const hashImage = this.state.newurl
          this.setState({ loading: true})
          this.props.createCloth(name, shop_name, size, material, tipe, hashImage)
          console.log("Data berhasil di simpan pada jaringan ethereum")
          var printid = this.state.productCount.toNumber()
          var fixid = printid+1

          setTimeout(function(){
            window.location.href = "http://localhost:3000/print/"+fixid
          }, 10000);
      
          
        }} >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input required id="clothName" ref={(input) => { this.clothName = input }}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Shop Name
                    </label>
                    <input required id="clothShop" ref={(input) => { this.clothShop = input }}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Shop Name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Size
                    </label>
                    <input required id="clothSize" ref={(input) => { this.clothSize = input }}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Size"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Material
                    </label>
                    <input required id="clothMaterial" ref={(input) => { this.clothMaterial = input }}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Material"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Type
                    </label>
                    <input required id="clothTipe" ref={(input) => { this.clothTipe = input }}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Type"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Product Image
                    </label>
                    <input required id="clothTipe" type='file' onChange={this.captureFile}
                      placeholder="Type"
                    />
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Preview Image
                    </label>
                    <img src={this.state.newurl} alt="Preview Image" width="100px" />
                  </div>
                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div> */}

                  <div className="text-center mt-6">
 <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
          }
        }
export default Main;

