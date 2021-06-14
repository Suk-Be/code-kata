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
    {
      brand: "kia",
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

// for ... in
// object handling
function calculateCountByBrand(data) {
  // create object
  let countedByBrand = {};
  data.cars.forEach((element) => {
    // if key unknown (brand), create key value pair in object
    if (!(element.brand in countedByBrand)) {
      countedByBrand[element.brand] = 1;
    } else {
      // key is known count plus one for the brand
      countedByBrand[element.brand]++;
    }
  });
  return countedByBrand;
}

console.log(calculateCountByBrand(carData));

// functional mixin
// filter: create and count brands
let count = 0;
const counted = (brand) =>
  carData.cars.filter((elem) => {
    count++;
    return elem.brand === brand;
  });
// create object: brand as key and brand.length as value
const countedBrand = (brand) => {
  return {
    [brand]: counted(brand).length,
  };
};
// assign objects
const countedBrands = Object.assign({}, ...args);

console.log(
  countedBrands(
    countedBrand("audi"),
    countedBrand("dacia"),
    countedBrand("ferrari"),
    countedBrand("kia")
  )
);
