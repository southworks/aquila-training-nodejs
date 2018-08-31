const http = require('http')
const concatStream = require('concat-stream')
const URL = process.argv[2]
let pageContent = ''

http.get(URL, (response) => {
    response.setEncoding('utf8')
    response.on('data', (data) => { pageContent += data })
    response.on('end', () => {
        console.log(pageContent.length)
        console.log(pageContent)
    } )
})