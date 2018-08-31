var sum = 0;
var argsArray = process.argv;
for (var i = 2; i < argsArray.length; i++) { 
    sum += Number(argsArray[i]);
}
console.log(sum);