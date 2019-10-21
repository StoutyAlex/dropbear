const LETTER = /[a-zA-Z]/;
const NUMBER = /^[0-9]+$/;
const WHITESPACE = /\s+/;
const OPERATORS = ['+', '-', '/', '*', '%'];

const isOpenParenthesis = char => char === '(';
const isClosingParenthesis = char => char === ')';

module.exports = {
  isLetter: char => LETTER.test(char),
  isNumber: char => NUMBER.test(char),
  isWhitespace: char => WHITESPACE.test(char),
  isParanthesis: char => isClosingParenthesis(char) || isOpenParenthesis(char),
  isQuote: char => char === '"',
  isOperator: char => OPERATORS.includes(char),
  isClosingParenthesis,
  isOpenParenthesis,
};
