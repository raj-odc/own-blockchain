const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block('My first Transaction which goes to genesis')];
    }
}

module.exports = Blockchain;