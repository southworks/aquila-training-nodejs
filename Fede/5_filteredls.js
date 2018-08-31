var fs = require('fs')
var filteredFiles = new Array()

function getFilteredFiles(directory, filter) {
    fs.readdir(directory, 'utf8', function doneReading(err, fileNames) {
        
        for (var i = 0 ; i < fileNames.length ; i++) {
            if (fileNames[i].endsWith('.' + filter))
               filteredFiles.push(fileNames[i])
        }
        
       if (filteredFiles.length > 0) {
            filteredFiles.forEach(function(entry) {
                console.log(entry);
            });
        } else {
            console.log("No files in " + directory + " matched with the provided filter.")
        }

    })
}

getFilteredFiles(process.argv[2], process.argv[3])
