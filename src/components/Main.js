import React, { Component } from 'react';
import './App.css';
import { Container } from './Container';
import TableDropdown from "./TableDropdown.js";
const triggerText = 'QR Code';
const color = "light";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  
class Main extends Component {
  
  componentWillMount() {
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
        
      </div>

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
                Card Tables
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
            <tbody  id="clothList">
            { this.props.cloths.map((cloth, key) => {
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
                  <TableDropdown />
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
      
    );
          }
        }
export default Main;

