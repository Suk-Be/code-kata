# Code Kata

This repository is meant to help improving the skills to manipulate and consume data.

## build an object from an array

const carData = {
cars: [
{
brand: "audi",
model: "a4",
year: 2015,
},
{
brand: "audi",
model: "a3",
year: 2010,
},
{
brand: "audi",
model: "q5",
year: 2016,
},
{
brand: "dacia",
model: "logan",
year: 2020,
},
{
brand: "dacia",
model: "dokker",
year: 2013,
},
{
brand: "dacia",
model: "duster",
year: 2016,
},
{
brand: "ferrari",
model: "f8",
year: 2020,
},
{
brand: "ferrari",
model: "portofino",
year: 2010,
},
{
brand: "ferrari",
model: "roma",
year: 1999,
},
{
brand: "ferrari",
model: "sf90",
year: 2021,
},
],
};

/\*\*

-
- @param data object containing an array of car information
- @returns an object containing the count of the cars, by brand
- e.g.: { 'audi': 3, 'dacia': 3, 'ferrari': 4 },
-
- Implement the function
  \*\*/

console.log(calculateCountByBrand(carData));

## sculpture a string to a frame

Write a function that takes a(ny) sentence an prints words of this sentence in a flexible frame out of symbols passed in as a 2nd argument.

Example:
"Hello World in a frame", "\*"
gets printed as:

---

- Hello \*
- World \*
- in \*
- a \*
- frame \*

---

## collection of katas

tasks: https://github.com/matchilling/kata-js/tree/master/src

### tests included

tasks: https://docs.codewars.com/languages/javascript

### researched not checked out yet

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
https://github.com/tddbin/katas
