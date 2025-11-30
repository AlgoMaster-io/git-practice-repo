const config = require('./config');
const { formatDate, calculateSum } = require('./utils');

function main() {
  console.log(`App: ${config.appName}`);
  console.log(`Version: ${config.version}`);
  console.log(`Started at: ${formatDate(new Date())}`);
}

function processNumbers(numbers) {
  const sum = calculateSum(numbers);
  console.log(`Sum: ${sum}`);
  return sum;
}

module.exports = { main, processNumbers };
