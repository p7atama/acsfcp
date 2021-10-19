const { create } = require('ipfs-http-client')

const ipfs = create(new URL('https://ipfs.infura.io:5001'))

export default ipfs;