var fs = require('fs')
//var fs2=fs.readdirSync('C:\Users\LucasPalacios\quercus-lpalacios\Node\MyFirstIO.js')
var fs2=fs.readFileSync(process.argv[2])
//var fs2=fs.readdirSync('C:\Users\LucasPalacios\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html')
var st=fs2.toString()
var array=st.split('\n')
var num =array.length-1
console.log(num)