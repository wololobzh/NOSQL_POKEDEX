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

COUCOU ASTOU