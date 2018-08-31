var mymodule = require('./6_mymodule.js')
var directory = process.argv[2]
var filter = process.argv[3]

function showFilteredFiles(err, filteredFiles) {

    if (err)
        throw err

    if (filteredFiles.length > 0) {
        filteredFiles.forEach(function(entry) {
            console.log(entry);
        });
    } else {
        console.log("No files in " + directory + " matched with the provided filter.")
    }

}

mymodule(directory, filter, showFilteredFiles)