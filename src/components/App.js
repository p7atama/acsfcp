import React, { Component } from 'react';
import Web3 from 'web3'
import Acsfcp from '../abis/Acsfcp.json'
import Navbar from './Navbar'
import Main from './Main'
import Show from './Show'
import queryString from 'query-string'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/19148326cb674857b80044d7d6876ad3"));
var address = "0x8cf7be6a443eafed3e89d439d6e389542732384d";
var contract = new web3.eth.Contract(Acsfcp.abi, address);

class App extends Component {

  async componentWillMount() {
    await this.checkPage()
    if (this.state.page == "show") {
      console.log("Ini Show")
      console.log("test awd",this.state.id)
      console.log("web3",web3)

await this.loadBlockchainData2()
    
    } else {
      console.log("Ini Main")
      await this.loadWeb3()
    await this.loadBlockchainData()
    }
    
  }
async checkPage()  {
  const value=queryString.parse(window.location.search);
  const page=value.page;
  this.setState({ page: page})
  // this.id = token - 1;
  // this.setState({ id: token - 1})
  console.log('Page is ',page)//123
  const token=value.id;
      this.setState({ id: token})
      this.setState({ encryptID: token})
      console.log('ini ID ',this.state.id)//123
      console.log('ini encryptID ',this.state.encryptID)//123

}
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    
    const web3 = window.web3
    console.log("web3 versi main", web3)
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Acsfcp.networks[networkId]
    if(networkData) {
      const acsfcp = web3.eth.Contract(Acsfcp.abi, networkData.address)
      this.setState({ acsfcp })
      console.log("acsfcp di main : ",acsfcp)
      const productCount = await acsfcp.methods.productCount().call()
      console.log("productCOunt di main : ",productCount)

      this.setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const cloth = await acsfcp.methods.cloths(i).call()
        this.setState({
          cloths: [...this.state.cloths, cloth]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  async loadBlockchainData2() {
    console.log("loadBlockchainData2")

    const acsfcp = web3.eth.Contract(Acsfcp.abi, address)

    this.setState({ acsfcp })
    const productCount = await contract.methods.productCount().call()
    console.log("hasil productcount",productCount)

    this.setState({ productCount })
    // Load products
    for (var i = 1; i <= productCount; i++) {
      const cloth = await acsfcp.methods.cloths(i).call().then(console.log());
      this.setState({
        cloths: [...this.state.cloths, cloth]
      })
    }      this.setState({ loading: false})


  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      cloths: [],
      loading: true,
      page: "",
      id: 0,
      encryptID: ""
    }

    this.createCloth = this.createCloth.bind(this)
    
    
  }

  createCloth(name, shop_name, size, material, tipe) {
    this.setState({ loading: true })
    this.state.acsfcp.methods.createCloth(name, shop_name, size, material, tipe).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    //.once('receipt', (receipt) => {this.setState({ loading: false })}
    
    //setTimeout(() => {  window.location.reload() }, 10000);
    // function test(){
    //   this.setState({ loading: false })
    // } .on("receipt", function () {
      //   console.log("Receipt");
      // })
    }
    


  

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : [this.state.page == "show" ?
                <Show
                  cloths={this.state.cloths}
                   /> : <Main
                   cloths={this.state.cloths}
                   createCloth={this.createCloth}
                    /> ]
              }
            </main>
          </div>
        </div>
        <Router>

{/* <Route path="/show/:id" component={Show} />
<Route path="/show/:id" render={(props) => <Show {...props} />} /> */}
<Switch><Route path="/show" component={Show} exact={true} /></Switch>

<Route path="/main" component={Main} />
</Router>
      </div>
    );
  }
}

export default App;