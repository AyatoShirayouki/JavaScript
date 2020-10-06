const getGets = (arr) => {
    let index = 0;
 
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '-7231'
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

//let input = gets().split(',').map(Number);
let n = gets();

let s = n;

function crd(d)
{
  var nd = d.toString().replace(".", "").replace("-", "");
  var n = 0;
  for(var i = 0; i < nd.length; i++) {
    n += parseInt(nd[i]);
  }
  if(n > 9) {
    return crd(n)
  }
  return n;
  
}
print(crd(n));