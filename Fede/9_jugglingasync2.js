const http = require('http')
const concatStream = require('concat-stream')
let pagesContent = ['', '', '']
let semaphore = 0

for (let i = 2 ; i <= 4 ; i++) {

    http.get(process.argv[i], (response) => { 
        response.setEncoding('utf8')
        response.pipe(concatStream((data) => {
            pagesContent[i] = data
            semaphore++
            if (semaphore === 3)
                printAll()
        }))
    })
}

function printAll() {
    console.log(pagesContent[2])
    console.log(pagesContent[3])
    console.log(pagesContent[4])
}



