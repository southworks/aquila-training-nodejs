const net = require('net')
const port = process.argv[2]
let date = new Date()

const server = net.createServer()
server.listen(port)
server.on('connection', (socket) => {
    const date = new Date()
    const month = getNumberWithLeadingZero(date.getMonth() + 1)
    const day = getNumberWithLeadingZero(date.getDate())
    const hour = getNumberWithLeadingZero(date.getHours())
    const minute = getNumberWithLeadingZero(date.getMinutes())
    socket.end(`${date.getFullYear()}-${month}-${day} ${hour}:${minute}\n`)
})

function getNumberWithLeadingZero(aNumber) {
    let result = '0'
    let aNumberStr = aNumber.toString()
    if (aNumberStr.length === 1)
        return (result + aNumberStr)
    return aNumberStr
}

