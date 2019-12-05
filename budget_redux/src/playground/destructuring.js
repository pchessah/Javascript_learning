const person = {
    name: 'Venice',
    age: 25,
    location: {
        city: 'Toronto',
        temp: 42
    }
}
var

const { name } = person;

console.log(name);

//array destructuring

const address = ['1000 Juniper', 'Berlin', 'Germany', '19IAT'];
console.log(address[1]);

const [street, myspot, place, code] = address;
console.log(myspot);