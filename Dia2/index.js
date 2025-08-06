let prompt = require('prompt-sync')();

//Conexión a MongoDB
const { MongoClient } = require('mongodb');
const uri = 'KHÉ?';
const dbName = 'crud_db';
const collectionName = 'personas';

let db, collection;
async function leerPersonas() {
    console.log("Hollissss");
    const client = new MongoClient(uri);
    try {

        await client.connect();
        db = client.db(dbName);
        collection = db.collection(collectionName);
        console.log("Conectado a la base de datos 🎉");
        const personas = await collection.find().toArray();
        console.log(personas);
    }
    catch (e) {
        console.log("Error:", e);
    }
    finally {
        await client.close();
        console.log("Cerrado la sesión de la base de datos");
    }
}
/*
let personas =[
    {nombre:'Juan',edad:30},
    {nombre:'Ana',edad:25}
];
console.log(personas);
console.log(personas[0]["nombre"]);
let n = prompt('Ingresa tu nombre:');
console.log("Tu nombre es:",n);
*/

async function menu() {
    booleanito = true;

    while (booleanito == true) {
        console.log("Escoge una opción:");
        console.log("1. Imprimir Personas");
        console.log("5. Salir");
        let opcion = prompt(':');
        switch (opcion.trim()) {
            case '1':
                //recorrerLista(personas);
                await leerPersonas();
                break;
            case '5':
                booleanito = false;
                break;
        }
    }
};
menu();