'use strict';
function getYearOfBirth(age) {
  return (2019 - age);
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age}.  I was born in ${yearOfBirth}.`;
}



const greeting = createGreeting('Nick', 24);

console.log(greeting);