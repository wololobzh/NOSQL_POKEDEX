const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:example@localhost:27017/?authSource=admin';

//Création de mon server http
const app = express();

let maBaseDeDonneesPokemon = null;

function startServer() {

//clientNoSQL est un objet qui se connecte à la bdd
const clientNoSQL = new MongoClient(url);
clientNoSQL.connect();
//maBaseDeDonneesPokemon est un objet qui représente la bdd pokedex
maBaseDeDonneesPokemon = clientNoSQL.db("pokedex"); 

 app.listen(3000, () => {
   console.log('WOLOLO : Server is running on http://localhost:3000');
 })

}

app.get("/pokemon", (req, res) => {
    const tabDePokemon = maBaseDeDonneesPokemon.collection("pokedex").find().toArray();
    res.send(tabDePokemon);
});


app.get("/", (req, res) => {
    res.send("Bienvenue dans mon Pokédex");
});

startServer();

