const fs = require('fs');
const { promisify } = require('util');
const path = require('path')

const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

class Database {
    constructor() {
        this.file = null
        this.path = path.join(__dirname, 'db.json')
    }

    static getInstance() {
        return new Database()
    }

    // save/load state
    async save(content) {
        await writeFile(this.path, content)
        return this
    }

    async load() {
        this.file = JSON.parse(await readFile(this.path))
        return this
    }

    // modify the database
    async add() {

    }

}

module.exports = Database