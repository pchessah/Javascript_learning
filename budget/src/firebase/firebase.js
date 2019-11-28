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
   

   const database = firebase.database ();

   export { firebase, database as default };


   

//    database.ref('expenses').push ({
//        description: 'Rent',
//        note: '',
//        amount: 5900,
//        createdAt: 976123498763
//    });

//    database.ref('expenses').push ({
//     description: 'Phone bill',
//     note: '',
//     amount: 6790,
//     createdAt: 976123498763
// })

// database.ref('expenses').push ({
//     description: 'Food',
//     note: '',
//     amount: 7890,
//     createdAt: 976123498763
// })





//   database().ref ().set ({
//       name: 'Chesa Paul',
//       location: {
//           city: 'Kisumu',
//           country: 'Kenya'
//       }
//   }).then (() => {
//       console.log ('Data is saved');
//   }).catch ((e) => {
//       console.log ('Data failed to save', e)
//   });




// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log (val);
// });

// database.ref().update({
//     'location/city' : 'Mombasa'
// });