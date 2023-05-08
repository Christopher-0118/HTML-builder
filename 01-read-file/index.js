const fs = require('fs'),
      path = require('path'),
      filePath = path.join(__dirname, 'text.txt');
      readableStream = fs.createReadStream(filePath, 'utf-8');
let data = '';

readableStream.on('data', chunk => data += chunk);
readableStream.on ('end', () => console.log(data));
readableStream.on('error', error => console.log('Error', error.message));