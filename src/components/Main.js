import React, { Component } from 'react';
import './App.css';
import { Container } from './Container';
const triggerText = 'QR Code';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
class Main extends Component {

  componentDidMount() {
    
    // const query = new URLSearchParams(this.props.location.search);
    // const token = query.get('id')
    
// console.log(this.props.cloths[0][0])
  }
  render() {
    return (
      <div className="App">
      <div id="content">
        <h1></h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.clothName.value
          const shop_name = this.clothShop.value
          const size = this.clothSize.value
          const material = this.clothMaterial.value
          const tipe = this.clothTipe.value
          this.props.createCloth(name, shop_name, size, material, tipe)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="clothName"
              type="text"
              ref={(input) => { this.clothName = input }}
              className="form-control"
              placeholder="Cloth Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="clothShop"
              type="text"
              ref={(input) => { this.clothShop = input }}
              className="form-control"
              placeholder="Cloth Shop Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="clothSize"
              type="text"
              ref={(input) => { this.clothSize = input }}
              className="form-control"
              placeholder="Cloth Size"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="clothMaterial"
              type="text"
              ref={(input) => { this.clothMaterial = input }}
              className="form-control"
              placeholder="Cloth Material"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="clothTipe"
              type="text"
              ref={(input) => { this.clothTipe = input }}
              className="form-control"
              placeholder="Cloth Type"
              required />
          </div>

          <button type="submit" className="btn btn-primary">Add Cloth</button>
        </form>
        <p>&nbsp;</p>
        <h2>Buy Product</h2>
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="clothList">
            { this.props.cloths.map((cloth, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{cloth.id.toString()}</th>
                  <td>{cloth.name}</td>
                  <td>{cloth.shop_name}</td>
                  <td>{cloth.size}</td>
                  <td>{cloth.material}</td>
                  <td>{cloth.tipe}</td>
                  <td>{cloth.owner}</td>
                  <td><Container triggerText={triggerText} forwardID={cloth.id} onSubmit={onSubmit} /></td>
                </tr>
              )
            })}
           
      
  
          </tbody>
        </table>
       
      </div></div>
    );
  }
}

export default Main;