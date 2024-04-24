console.log(" Console Notebook Code Source JSON Generator");

const fs = require('fs');
const readline = require('readline');

// Specify the file path here
const filePathIn = 'binary.search.js';
const filePathOut = 'source.code.js';


// Function to write a line to the file
function writeLineToFile(line) {
    fs.appendFileSync(filePathOut, line + '\n', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Line appended to file:', line);
      }
    });
  }

// Create a ReadStream for the file
const fileStream = fs.createReadStream(filePathIn);

// Create the readline interface
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity // Recognize all instances of CR LF ('\r\n') as a single line break.
});

const lines = []; // Array to hold the lines

rl.on('line', (line) => {
  // Push each line from the file to the array
  lines.push(line);
});

rl.on('close', () => {
  // All lines are read, file is closed now.
  console.log('Array of lines:', lines);

  writeLineToFile(`data = {`);
  writeLineToFile(`fileName:"${filePathIn}",`);
  writeLineToFile(`numberOfLines:"${lines.length}",`);
  writeLineToFile(`raw:{`);

  for(let i = 0; i < lines.length;i++){
    writeLineToFile(`ln_${i}:"${lines[i]}",`);
  }
  writeLineToFile(`}`);
  writeLineToFile('};');

});

// Handle any errors while reading the file
rl.on('error', (error) => {
  console.error('Error reading the file:', error);
});

