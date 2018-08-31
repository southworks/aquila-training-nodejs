const http = require('http')

const port = process.argv[2]

const server = http.createServer((request, response) => {
    
    let body = []
    
    request.on('error', (err) => {
        console.error(err.stack);
        // This prints the error message and stack trace to `stderr`.
    });

    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        
        const convertedString = body.toString().toUpperCase();
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(convertedString);
    });

})
server.listen(port, '127.0.0.1')

