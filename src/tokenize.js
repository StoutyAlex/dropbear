const {
  isLetter,
  isNumber,
  isWhitespace,
  isOperator,
  isQuote,
  isParanthesis,
} = require('./identify');

module.exports = (input) => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length ) {
    const character = input[cursor];

    if (isParanthesis(character)) {
      tokens.push({ type: 'Parenthesis', value: character });
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;

      // bump then number then use it
      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({ type: 'Number', value: parseInt(number, 10)});
      continue;
    }

    if (isLetter(character)) {
      let word = character;

      while(isLetter(input[++cursor])) {
        word += input[cursor];
      }

      tokens.push({type: 'Name', value: word});
      continue;
    }

    if(isWhitespace(character)) {
      cursor++;
      continue;
    }

    if(isQuote(character)) {
      let string = '';

      while(!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({ type: 'String', value: string });
      cursor++;
      continue;
    }
  }

  return tokens;
};