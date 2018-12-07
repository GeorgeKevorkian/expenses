import * as firebase from 'firebase';

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

firebase
  .database()
  .ref()
  .set({
    name: 'George Kevorkian',
    age: 26,
    isSingle: false,
    location: {
      city: 'Yerevan',
      country: 'Armenia',
    },
  });

//database.ref().set('This is my data.');

database.ref().set({
  age: 25,
});
