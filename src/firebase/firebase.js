import * as firebase from 'firebase';
import expenses from '../reducers/expenses';

const config = {
  apiKey: 'AIzaSyAsPusbZFiyFpNdp-_owq6C5U2zLT42feU',
  authDomain: 'expensify-6bf86.firebaseapp.com',
  databaseURL: 'https://expensify-6bf86.firebaseio.com',
  projectId: 'expensify-6bf86',
  storageBucket: 'expensify-6bf86.appspot.com',
  messagingSenderId: '991179998756',
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 10500,
  createdAt: 2000,
});

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native, angular, python',
// });

// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// firebase
//   .database()
//   .ref()
//   .set({
//     name: 'George Kevorkian',
//     age: 25,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Yerevan',
//       country: 'Armenia',
//     },
//   })
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch(error => {
//     console.log('This failed.', error);
//   });

// database.ref().update({
//   'job/company': 'Amazon',
//   stressLevel: 9,
//   'location/city': 'Seattle',
// });

// database.ref().set('This is my data.');

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch(e => {
//     console.log('Did not remove data', e);
//   });
