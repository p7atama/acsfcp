pragma solidity ^0.5.0;

contract Acsfcp {
    string public name;
    uint public productCount = 0;
    mapping(uint => Cloth) public cloths;

    struct Cloth {
        uint id;
        string name;
        string shop_name;
        string size;
        string material;
        string tipe;
        address owner;
    }

    event ClothCreated(
        uint id,
        string name,
        string shop_name,
        string size,
        string material,
        string tipe,
        address owner
    );

    constructor() public{
        name = "Anti Counterfeting System for Clothing Products";
    }

    function createCloth(string memory _name, string memory _shop_name, string memory _size, string memory _material, string memory _tipe) public {
    // Require a valid name
    require(bytes(_name).length > 0);
    require(bytes(_shop_name).length > 0);
    require(bytes(_size).length > 0);
    require(bytes(_material).length > 0);
    require(bytes(_tipe).length > 0);
    // Require a valid price
    // Increment product count
    productCount ++;
    // Create the product
    cloths[productCount] = Cloth(productCount, _name, _shop_name, _size, _material, _tipe, msg.sender);
    // Trigger an event
    emit ClothCreated(productCount, _name, _shop_name, _size, _material, _tipe, msg.sender);
}
}