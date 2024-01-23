const fs = require('fs');

function removeExtraSpaces(inputFilePath) {
    try {
        let content = fs.readFileSync(inputFilePath, 'utf-8');
        let modifiedContent = content.replace(/\s+/g, ' ');
        fs.writeFileSync(inputFilePath, modifiedContent, 'utf-8');
        console.log('Extra spaces removed and file updated successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const inputFile = 'your_file.txt';
removeExtraSpaces(inputFile);
