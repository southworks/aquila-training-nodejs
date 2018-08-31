const http = require('http')
const URL1 = process.argv[2]
const URL2 = process.argv[3]
const URL3 = process.argv[4]
let page1Content = ''
let page2Content = ''
let page3Content = ''
let semaphore = 0

http.get(URL1, (response) => {
    response.setEncoding('utf8')
    response.on('data', (data) => { page1Content += data })
    response.on('end', () => {
        semaphore++
        if (semaphore == 3)
            printAll()
    })
})

http.get(URL2, (response) => {
    response.setEncoding('utf8')
    response.on('data', (data) => { page2Content += data })
    response.on('end', () => {
        semaphore++
        if (semaphore == 3)
            printAll()
    })
})

http.get(URL3, (response) => {
    response.setEncoding('utf8')
    response.on('data', (data) => { page3Content += data })
    response.on('end', () => {
        semaphore++
        if (semaphore == 3)
            printAll()
    })
})

function printAll() {
    console.log(page1Content)
    console.log(page2Content)
    console.log(page3Content)

}



