const database = require("./database-connection");


module.exports = {
    list() {
        return database("resolutions").select("*")
    },
    read(id) {
        return database("resolutions").where("id", id).first()
    },
    create(resolution) {
        return database("resolutions").insert(resolution).returning("*").first()
            .then(record => record)
    },
    update(id, resolution) {
        return database("resolution").update(resolution).where("id", id).returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("resolutions").delete().where("id", id)
    }
};