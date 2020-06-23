const Database = require("../db/database")

const load = async () => {
    var db = new Database()
    var text = await db.load()
    console.log(text)
}

const save = async () => {
    var db = new Database()
    await (await (await db.load()).add({"lol": "ok"})).save()
}

const initiate = async () => {
    await Database.initiate()
}

initiate()