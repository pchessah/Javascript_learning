//CRUD create, read, update, delete
const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'users';

// const id = new ObjectID();
// console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) =>{
    if(error){
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName);


    //  db.collection('admin').insertOne({
    //    name: 'isaac',
    //      age: 27
    //  });
    // db.collection('users').insertMany([
    //     {
    //         name: 'Tom',
    //         age: 20
    //     }, {
    //         name: 'Gunjer',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert many documents');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false 
    //     },{ 
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) =>{
    //     if (error){
    //         return console.log('Unable to insert tasks');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks);

    // });

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5db2a689854f1b72083eb23c")
    // },{
    //     $inc: {
    //         age:5678
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed:true 
    //     } 
    // }).then((result) => {
    //     console.log (result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // });

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });


});
