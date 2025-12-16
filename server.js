const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:example@localhost:27017/?authSource=admin';

//Création de mon server http
const app = express();

let maBaseDeDonneesPokemon = null;

async function startServer() {

    try {

        //clientNoSQL est un objet qui se connecte à la bdd
        const clientNoSQL = new MongoClient(url);
        await clientNoSQL.connect();
        //maBaseDeDonneesPokemon est un objet qui représente la bdd pokedex
        maBaseDeDonneesPokemon = clientNoSQL.db("pokemon");

        console.log("maBaseDeDonneesPokemon : " + maBaseDeDonneesPokemon)

        app.listen(3000, () => {
            console.log('WOLOLO : Server is running on http://localhost:3000');
        })
    } catch (err) {
        console.error("WOLOLO : ERREUR")
    }
}

app.get("/pokemon", async (req, res) => {
    try {
        const pokedexArray = await maBaseDeDonneesPokemon.collection("pokedex").find().toArray();
        res.json(pokedexArray);
    } catch (err) {
        console.error(err)
    }
});

app.get("/", (req, res) => {
    res.send("Bienvenue dans mon Pokédex");
});

startServer();

