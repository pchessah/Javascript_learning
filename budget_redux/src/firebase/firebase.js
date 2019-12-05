import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBRSyMCsaHRR0XoE7Gd7qEn6PKjig8tSeY",
    authDomain: "budget-99ed2.firebaseapp.com",
    databaseURL: "https://budget-99ed2.firebaseio.com",
    projectId: "budget-99ed2",
    storageBucket: "budget-99ed2.appspot.com",
    messagingSenderId: "108491177035",
    appId: "1:108491177035:web:4fc794946ee4b01e47e1ce"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
 export { firebase, database as default};
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