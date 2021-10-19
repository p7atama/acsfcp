import React, { Component } from 'react';
//import { Redirect } from "react-router-dom";
//import Admin from './Admin';
import './App.css';
import diom from '../abis/diomcloth.json';
import Web3 from 'web3'
import Loading from "./Loading";

//import { Container } from './Container';
//import TableDropdown from "./TableDropdown.js";
const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/19148326cb674857b80044d7d6876ad3"));
// var address = "0x8cf7be6a443eafed3e89d439d6e389542732384d";
// address, contract diom.sol
// var address = "0xd1c5547e0ef3e822095e5ba0c6366d256fac7586";
// var contract = new web3.eth.Contract(diom.abi, address);
var address = "0x214b8f9a482707bb95c949509870468faeb8819a";
var contract = new web3.eth.Contract(diom.abi, address);
  
  
class Main extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      loading: false,
      productCount: 0,
      ipfsHash: '',
      buffer: null,
      newurl1: '',
      newurl2: '',
      newurl3: '',
      newurl4: '',
    }
    this.captureFile1 = this.captureFile1.bind(this);
    this.captureFile2 = this.captureFile2.bind(this);
    this.captureFile3 = this.captureFile3.bind(this);
    this.captureFile4 = this.captureFile4.bind(this);
  }
  async componentWillMount() {
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const acsfcp = web3.eth.Contract(diom.abi, address)
    this.setState({ acsfcp })
    const productCount = await contract.methods.productCount().call()
    // const testnama = await acsfcp.methods.name().call()
    console.log("test product ",productCount.toNumber())
    this.setState({ productCount })
  }
  async captureFile1(event) {
    event.preventDefault()
    const ipfs1 = window.IpfsHttpClient.create('https://ipfs.infura.io:5001/api/v0')
    const file1 = event.target.files[0]
    const added1 =  await ipfs1.add(file1).then(console.log(added1))
    console.log("added path 1: ",added1.path)
      const url1 = `https://ipfs.infura.io/ipfs/${added1.path}`
      this.setState({ newurl1: url1  })

  }
  async captureFile2(event) {
    event.preventDefault()
    const ipfs2 = window.IpfsHttpClient.create('https://ipfs.infura.io:5001/api/v0')
    const file2 = event.target.files[0]
    const added2 =  await ipfs2.add(file2).then(console.log(added2))
    console.log("added path : ",added2.path)
      const url2 = `https://ipfs.infura.io/ipfs/${added2.path}`
      this.setState({ newurl2: url2  })

  }
  async captureFile3(event) {
    event.preventDefault()
    const ipfs3 = window.IpfsHttpClient.create('https://ipfs.infura.io:5001/api/v0')
    const file3 = event.target.files[0]
    const added3 =  await ipfs3.add(file3).then(console.log(added3))
    console.log("added path : ",added3.path)
      const url3 = `https://ipfs.infura.io/ipfs/${added3.path}`
      this.setState({ newurl3: url3  })

  }
  async captureFile4(event) {
    event.preventDefault()
    const ipfs4 = window.IpfsHttpClient.create('https://ipfs.infura.io:5001/api/v0')
    const file4 = event.target.files[0]
    const added4 =  await ipfs4.add(file4).then(console.log(added4))
    console.log("added path : ",added4.path)
      const url4 = `https://ipfs.infura.io/ipfs/${added4.path}`
      this.setState({ newurl4: url4  })

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
          const hashImage1 = this.state.newurl1
          const hashImage2 = this.state.newurl2
          const hashImage3 = this.state.newurl3
          const hashImage4 = this.state.newurl4
          var joinHash = `${hashImage1},${hashImage2},${hashImage3},${hashImage4}`
          const hashImage = joinHash
          console.log("Hasil joinHash :", joinHash);
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
                      Front View Image
                    </label>
                    <input required id="clothTipe" type='file' onChange={this.captureFile1}
                      placeholder="Type"
                    />
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Preview Front View Image
                    </label>
                    <img src={this.state.newurl1} alt="Preview Front View" width="100px" />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Back View Image
                    </label>
                    <input required id="clothTipe" type='file' onChange={this.captureFile2}
                      placeholder="Type"
                    />
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Preview Back View Image
                    </label>
                    <img src={this.state.newurl2} alt="Preview Back View" width="100px" />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Bottom View Image
                    </label>
                    <input required id="clothTipe" type='file' onChange={this.captureFile3}
                      placeholder="Type"
                    />
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Preview Bottom View Image
                    </label>
                    <img src={this.state.newurl3} alt="Preview Bottom View" width="100px" />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Top View Image
                    </label>
                    <input required id="clothTipe" type='file' onChange={this.captureFile4}
                      placeholder="Type"
                    />
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Preview Top View Image
                    </label>
                    <img src={this.state.newurl4} alt="Preview Top View" width="100px" />
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

