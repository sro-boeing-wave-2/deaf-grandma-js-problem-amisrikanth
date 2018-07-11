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
  const input = prompt();
  if (input === 'BYE') {
    count += 1;
  }
  if (isUppercase(input) && count < 3) {
    print(`NO, NOT SINCE 19${getRandomValue(30, 50)}`);
  } else if (count < 3) {
    print('HUH?! SPEAK UP, SONNY!');
  }
} while (count < 3);
