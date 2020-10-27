// function that takes two arguments and return their minimum value

function MinimumVal (a, b) {
  if (a < b) {
    return a;
  } else return b;
}
console.log (MinimumVal (5, 25));
console.log (MinimumVal (7, 6));

function isEven (target) {
  function checkIfEven (zero, one) {
    if (zero % target === 0) {
      return true;
    } else if (one % target !== 0) {
      return false;
    }
  }
  return checkIfEven (50, 75);
}

console.log (isEven (5));

function Even (n) {
  if (n == 0) return true;
  else if (n === 1) return false;
  else if (n < 0) return Even (-n);
  else return Even (n - 2);
}

console.log (Even (50));
console.log (Even (75));
console.log (Even (-1));

// this function will return how many single character uppercase are in a string or sentence

function countingBs (string) {
  return countingCharacters (string, 'B');
}

// this function here will actually perform the counting of the string , and checking to see the index of the character that we are looking and the returns it

function countingCharacters (string, character) {
  let countcharacter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == character) {
      countcharacter++;
    }
  }
  return countcharacter;
}

console.log ('There are ' + countingBs ('BBBBC') + ' B ' + ' in ' + ' BBBBC');
console.log (
  'There are ' +
    countingCharacters ('MISSISSIPPI', 'S') +
    ' S ' +
    ' in ' +
    'MISSISSIPPI'
);
