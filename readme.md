Code Kata

//// build an object from an array //

// Your last JavaScript (Node) code is saved below:
// Response coming from our backend server

const carData = {
  cars: [
    {
      "brand": "audi",
      "model": "a4",
      "year": 2015
    },
    {
      "brand": "audi",
      "model": "a3",
      "year": 2010
    },
    {
      "brand": "audi",
      "model": "q5",
      "year": 2016
    },
    {
      "brand": "dacia",
      "model": "logan",
      "year": 2020
    },
    {
      "brand": "dacia",
      "model": "dokker",
      "year": 2013
    },
    {
      "brand": "dacia",
      "model": "duster",
      "year": 2016
    },
    {
      "brand": "ferrari",
      "model": "f8",
      "year": 2020
    },
    {
      "brand": "ferrari",
      "model": "portofino",
      "year": 2010
    },
    {
      "brand": "ferrari",
      "model": "roma",
      "year": 1999
    },
    {
      "brand": "ferrari",
      "model": "sf90",
      "year": 2021
    },
  ]
}

/**
 * 
 * @param data object containing an array of car information
 * @returns an object containing the count of the cars, by brand
 * e.g.: { 'audi': 3, 'dacia': 3, 'ferrari': 4 },
 * 
 * Implement the function
 * var myArray = [123, 15, 187, 32];

myArray.forEach(function (value, i) {
    console.log('%d: %s', i, value);
});

// Outputs:
// 0: 123
// 1: 15
// 2: 187
// 3: 32
 */
function calculateCountByBrand(data) {
  let cars = {}
  data.cars.forEach((item, i) => {
      if (!(item.brand in cars)) {
        cars[item.brand] = 1
      } else {
        cars[item.brand]++
      }      
  })
  
  return cars
}
  
console.log(calculateCountByBrand(carData))


//// sculpture a string to a form //

Write a function that takes a sentence an prints words of this sentence in a frame out of symbol passed in as a 2nd argument.
Example:
"Hello World in a frame",
"*"
gets printed as:



***************************
* Hello                   *
* WorldStaring *
* in    *
* a     *
* frame *
*********

9 first
7 rows
most digits in line makes framewidth
most rows in print makes frameheight
 two arguments

- 1 sentence
     longest word in the sentence
         makes longest width of a row
- word
    in front of the word and at the end of the word should be a space

- the lenght of the first and last row is the amount of characters used in longest word
    and printed out
