const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(userData) {
        this.data = userData;
    }

    toHash() {
        return SHA256(this.data)
    }
}

module.exports = Block;
