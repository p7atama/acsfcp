const Diomimg = artifacts.require('../src/contracts/diomimg.sol')
require('chai')
  .use(require('chai-as-promised'))
  .should()
contract('Diomimg', ([deployer, seller, buyer]) => {
  let diomimg

  before(async () => {
    diomimg = await Diomimg.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await diomimg.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await diomimg.name()
      assert.equal(name, 'Anti Counterfeting System for Clothing Products')
    })

  })
  describe('products', async () => {
    let result, productCount

    before(async () => {
      result = await diomimg.createCloth('Vans Old Classic', 'diom cloth','40','Rubber Textile','Sneakers','15feefb1f51dcb66bb27d45c1f28cc6d:56513d3d', { from: seller })
      productCount = await diomimg.productCount()
    })

    it('creates products', async () => {
      // SUCCESS
      assert.equal(productCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(event.name, 'Vans Old Classic', 'name is correct')
      assert.equal(event.shop_name, 'diom cloth', 'store name is correct')
      assert.equal(event.size, '40', 'size is correct')
      assert.equal(event.material, 'Rubber Textile', 'material is correct')
      assert.equal(event.tipe, 'Sneakers', 'type is correct')
      assert.equal(event.hashImage, '15feefb1f51dcb66bb27d45c1f28cc6d:56513d3d', 'image hash is correct')


      // FAILURE: Product must have a name
      await await diomimg.createCloth('', { from: seller }).should.be.rejected;
      // FAILURE: Product must have a price
      await await diomimg.createCloth('Vans Old Classic', 'diom cloth','40', { from: seller }).should.be.rejected;
    })

    it('lists products', async () => {
      const product = await diomimg.cloths(productCount)
      assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(product.name, 'Vans Old Classic', 'name is correct')
      assert.equal(product.shop_name, 'diom cloth', 'shop name is correct')
      assert.equal(product.size, '40', 'size is correct')
      assert.equal(product.material, 'Rubber Textile', 'material is correct')
      assert.equal(product.tipe, 'Sneakers', 'type is correct')
      assert.equal(product.hashImage, '15feefb1f51dcb66bb27d45c1f28cc6d:56513d3d', 'image hash is correct')
    })

    

  })
})