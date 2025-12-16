# NOSQL_POKEDEX

## Démonstration 1 du matin

Pour tester, dans le terminal : 

```sh
>docker exec -it mongo-pokemon mongosh

>use admin

>db.auth("root", "example")

>use pokemon

>show collections

>db.samples_pokemon.renameCollection("pokedex")
```

//Utilisez les différentes commandes à la mano

>db.pokedex.find().limit(3).toArray()

//Correspond à SELECT * FROM Pokedex en SQL
>db.pokedex.find() 

//Correspond à SELECT count(*) FROM Pokedex en SQL
>db.pokedex.countDocuments()

//Correspond à SElect * FROM Pokedex Where id = 20
>db.pokedex.find({id:20})

//Projection
//Correspond à SELECT name, weight FROM Pokedex
>db.pokedex.find({},{name:1, weight:1})
>db.pokedex.find({WHERE},{SELECT})

>db.pokedex.find({type:Dragon})

>db.pokedex.find({},{name:1, weight:1}).sort({weight:1})

>db.pokedex.insertOne({nom:"Wololosky",superPouvoir:"Convertir les marrons"})

>db.pokedex.insertOne({nom:"Wololosky",bateau:"planche à voile",superPouvoir:"Slide ppt"})

>db.pokedex.updateOne({nom:"Wololosky"},{$set: {bateau:"Planche de surf2"}})

>db.pokedex.find({nom:"Wololosky"})

>db.pokedex.deleteOne({nom:"Wololosky"})

