
//Connecting to db
const {MongoClient} = require('mongodb');

async function main() {

    const uri = "mongodb+srv://shazilj:Dragon.tales00@cluster0.vbrxv.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);


    try {
    await client.connect();

    await listDatabases(client);  

    }
    catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
}
//Calling Function
main().catch(console.error);

//List of Db
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

console.log("Databases:");
databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

