const fs = require('fs');

const filePath = 'example.txt'; 
const writeFileAsync = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
const newContent = 'This is the new content for the file.';
writeFileAsync(filePath, newContent)
  .then(() => {
    console.log('File write successful.');
  })
  .catch((err) => {
    console.error('Error writing to file:', err);
  });
