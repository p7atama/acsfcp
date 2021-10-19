import React, { Component } from 'react';
import Acsfcp from '../abis/diomcloth.json'
import queryString from 'query-string'
import Hashids from 'hashids';
var hashids = new Hashids('Anti Counterfeting System for Clothing Products')
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/19148326cb674857b80044d7d6876ad3"));
var address = "0x214b8f9a482707bb95c949509870468faeb8819a";
 //this command is working


      
class Show extends Component {
  
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
    const value=queryString.parse(window.location.search);
  const token=value.id;
  const numbers = hashids.decode(token)
      this.setState({ id: numbers[0]-1})
      
      console.log('ini ID asdas ',this.state.id)//123
      
  }
  componentDidMount() {
    console.log(this.props.cloths)
    console.log("ini id di show:",this.state.id)

    // const query = new URLSearchParams(this.props.location.search);
    // const token = query.get('id')
    
// console.log(this.props.cloths[0][0])
  }

  async loadBlockchainData() {
    console.log("test")
    const acsfcp = web3.eth.Contract(Acsfcp.abi, address)
    this.setState({ acsfcp })
    const productCount = await acsfcp.methods.productCount().call()
    this.setState({ productCount })
    // Load products
    for (var i = 1; i <= productCount; i++) {
      const cloth = await acsfcp.methods.cloths(i).call()
      this.setState({
        cloths: [...this.state.cloths, cloth]
      })
    }      this.setState({ loading: false})

  }
  
  render() {
    
    return (
      <div id="content">
        <h1>{this.state.id}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Shop Name</th>
              <th scope="col">Size</th>
              <th scope="col">Material</th>
              <th scope="col">Type</th>
              <th scope="col">Owner</th>
            </tr>
          </thead>
          <tbody id="clothList">
            
                <tr>
                  <th scope="row">{this.props.cloths[this.state.id][0].toString()}</th>
                  <td>{this.props.cloths[this.state.id].name}</td>
                  <td>{this.props.cloths[this.state.id].shop_name}</td>
                  <td>{this.props.cloths[this.state.id].size}</td>
                  <td>{this.props.cloths[this.state.id].material}</td>
                  <td>{this.props.cloths[this.state.id].tipe}</td>
                  <td>{this.props.cloths[this.state.id].owner}</td>
                 
                </tr>
           
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Show;