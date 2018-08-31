const http = require('http')
const concatStream = require('concat-stream')
const URL = process.argv[2]

http.get(URL, (response) => {
    response.setEncoding('utf8')
    response.pipe(concatStream(function (data) {
        console.log(data.length)
        console.log(data)
    }))
})