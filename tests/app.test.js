const { processNumbers } = require('../src/app');
const { formatDate, calculateSum } = require('../src/utils');

console.log('Testing calculateSum...');
const result = calculateSum([1, 2, 3, 4, 5]);
console.log(result === 15 ? 'PASS' : 'FAIL');

console.log('Testing formatDate...');
const date = new Date('2024-01-15');
const formatted = formatDate(date);
console.log(formatted === '2024-01-15' ? 'PASS' : 'FAIL');
