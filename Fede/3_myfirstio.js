var fs = require('fs')

var fileContent = fs.readFileSync(process.argv[2])
var fileContentLines = fileContent.toString().split('\n')

console.log(fileContentLines.length - 1)