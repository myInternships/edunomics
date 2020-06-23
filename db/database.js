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

    static async initiate() {
        var db = new Database()
        db.file = []
        await db.save()
    }

    // save/load state
    async save() {
        await writeFile(this.path, JSON.stringify(this.file))
        return this
    }

    async load() {
        this.file = JSON.parse(await readFile(this.path))
        return this
    }

    // modify the database
    async add(content) {
        this.file.push(content)
        return this
    }
}

module.exports = Database