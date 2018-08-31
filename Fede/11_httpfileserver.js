const http = require('http')
var fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

var server = http.createServer( (req, res) => {
    
    const source = fs.createReadStream(file);
    source.pipe(res);
    
})
server.listen(port)

