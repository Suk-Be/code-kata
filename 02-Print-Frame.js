/*
Write a function that takes a(ny) sentence an prints words of this sentence in a flexible frame out of symbols passed in as a 2nd argument.

Example:
"Hello World in a frame", "*"
gets printed as:

*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

const print = (data = "", symbol = "") => {
  const words = data.split(" ");

  words.forEach((element, i) => {
    if (i < words.length) {
      words[i] = symbol + " " + words[i] + " " + symbol;
    }
  });

  const longestWord = words.reduce((accumulator, currentVal) =>
    accumulator.length > currentVal.length ? accumulator : currentVal
  );

  const check = (longestWord, words) => {
    //console.log(symbol);
    console.log(words);
    console.log(longestWord, longestWord.length);

    words.forEach((word, i) => {
      if (word.length < longestWord.length) {
        console.log(word, word.length);
      }
    });
    console.log(words.join(" "));
  };

  check(longestWord, words);
};

const symbol = "*";
const sentence = "Hello world in a frame";
print(sentence, symbol);
