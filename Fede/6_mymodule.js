var fs = require('fs')
var filteredFiles = new Array()

function getFilteredFiles(directory, filter, callback) {
    fs.readdir(directory, 'utf8', function doneReading(err, fileNames) {

        if (err)
            return callback(err)
        
        for (var i = 0 ; i < fileNames.length ; i++) {
            if (fileNames[i].endsWith('.' + filter))
               filteredFiles.push(fileNames[i])
        }

        callback(null, filteredFiles)

    })
}

module.exports = getFilteredFiles