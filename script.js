'use strict';
function getYearOfBirth(age) {
  if (age < 0){
    throw new Error('Age cannot be negative')
  }
  return (2019 - age);
}

function createGreeting(name, age) {
  if (typeof name === 'string' && typeof age === 'number'){
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age}.  I was born in ${yearOfBirth}.`;
  } else {
    throw new Error('Arguments not valid')
  }
}

try {
  const greeting = createGreeting('Nick', -1);
} catch(e){
  console.error('error');
}

const greeting = createGreeting('Nick');

console.log(greeting);