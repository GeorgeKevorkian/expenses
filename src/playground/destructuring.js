// const person = {
//   name: 'George',
//   age: 25,
//   location: {
//     city: 'Yerevan',
//     temp: 15,
//   },
// };

// const {name: firstName = 'Anonymous', age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin',
//   },
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// const address = ['Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state = 'New York', zip] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee', '$2', '$3', '$4'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);
