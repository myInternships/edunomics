const Database = require("../db/database")

const test = async () => {
    var db = new Database()
    var text = await db.load()
    console.log(text)
}

test()