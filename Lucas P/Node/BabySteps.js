
var elem=0;
for (let index = 2; index < process.argv.length; index++) 
{
    elem+=Number(process.argv[index]);
}
console.log(elem);

