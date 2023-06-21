const connection = require("../config/dbConfig");
connection();

const songData = require("./song");
const songs = require("../models/songModel");

const importData = async () => {
    try {
        await songs.collection.dropIndexes()
        await songs.collection.deleteMany({})
        await songs.insertMany(songData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        process.exit(1);
    }
};
importData();
 
