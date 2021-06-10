//// build an object from an array //

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

/**
 *
 * @param data object containing an array of car information
 * @returns an object containing the count of the cars, by brand
 * e.g.: { 'audi': 3, 'dacia': 3, 'ferrari': 4 },
 *
 * Implement the function
 **/

// Implemented function
function calculateCountByBrand(data) {
  let cars = {};
  data.cars.forEach((item, i) => {
    if (!(item.brand in cars)) {
      cars[item.brand] = 1;
    } else {
      cars[item.brand]++;
    }
  });
  return cars;
}

console.log(calculateCountByBrand(carData));
