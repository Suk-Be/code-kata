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
  const space = " ";
  const words = data.split(" ");

  words.forEach((element, i) => {
    if (i < words.length) {
      words[i] = "\n" + " " + symbol + " " + words[i];
    }
  });

  const getLongestWord = (words) =>
    words.reduce((accumulator, currentVal) =>
      accumulator.length > currentVal.length ? accumulator : currentVal
    );

  const longestWord = getLongestWord(words);

  const check = (longestWord, words) => {
    words.forEach((word, index) => {
      if (word.length < longestWord.length) {
        words[index] =
          `${words[index]}` +
          `${space.repeat(longestWord.length - word.length)}`;
      }
      words[index] = `${words[index]} ${symbol}`;
    });
    const repeatLength = getLongestWord(words).length - 2;
    const symbolrow = "\n" + " " + symbol.repeat(repeatLength);
    console.log(words.unshift(symbolrow));
    console.log(words.push(symbolrow));
    console.log(words.join(" "));
  };

  check(longestWord, words);
};

const symbol = "*";
const sentence = "Hello worldia in a frame";
print(sentence, symbol);
