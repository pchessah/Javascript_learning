import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default};







// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });

//const database = firebase.database();

// database.ref().set({
//     name: 'Dorcas Chepkoech',
//     location: {
//         city: 'Bangkok',
//         country: 'Thailand'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('Failed to Save!')
// });
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// });

// database.ref().update({
//     'location/city': 'Chiang Mai'
// });