/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */

let count = 0;
print('What do you want to say to Grandma!!');
do {
  const input1 = prompt();
  if (isUppercase(input1)) {
    if (input1 === 'BYE') {
      count += 1;
      if (count === 3) {
        break;
      }
    }
    const str = 'NO, NOT SINCE 19';
    print(str + getRandomValue(30, 50));
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
} while (count < 3);
