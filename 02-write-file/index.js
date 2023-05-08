const {stdin, stdout, exit} = process,
      fs = require('fs'),
      path = require('path'),
      output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('input your text: ');
stdin.on('data', chunk => output.write(chunk));

output.on('exit', () => stdout.write('input completed'));//it doesn't work, if you know how it fix, please tell me