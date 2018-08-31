var fs = require('fs')

function getNewLines() {
    fs.readFile(process.argv[2], 'utf8', function doneReading(error, fileContent) {
        console.log(fileContent.split('\n').length - 1)
    })
}

getNewLines()