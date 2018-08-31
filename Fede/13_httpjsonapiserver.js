const http = require('http')
const url = require('url');

const port = process.argv[2];
const endpoint1 = '/api/parsetime';
const endpoint2 = '/api/unixtime';

const server = http.createServer((request, response) => {

    if (request.method !== 'GET') {
        return response.end('Send me a GET\n')
    }

    const parsedURL = url.parse(request.url, true);
    const query = parsedURL.query;

    const time = new Date(query.iso);

    let jsonResponse = '';

    response.setHeader('Content-Type', 'application/json');

    if (parsedURL.pathname === endpoint1) {

        const hour = Number(time.getHours());
        const minute = Number(time.getMinutes());
        const second = Number(time.getSeconds());

        jsonResponse = {
            'hour' : hour,
            'minute' : minute,
            'second' : second
        }

        response.end(JSON.stringify(jsonResponse));

    } else if (parsedURL.pathname === endpoint2) {

        const unixTime = Number(time.getTime());

        jsonResponse = {
            'unixtime': unixTime
        }

        response.end(JSON.stringify(jsonResponse));

    } else {
        response.writeHead(404);
        response.end();
    }

})
server.listen(port)