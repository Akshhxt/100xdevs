const fs = require('fs');

const filePath = 'example.txt'; 
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const expensiveOperation = () => {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.random();
  }
  return result;
};
readFileAsync(filePath)
  .then((fileContent) => {
    console.log('File Contents:', fileContent);
    console.time('Expensive Operation');
    const result = expensiveOperation();
    console.timeEnd('Expensive Operation');

    console.log('Expensive Operation Result:', result);
  })
  .catch((err) => {
    console.error('Error reading file:', err);
  });
