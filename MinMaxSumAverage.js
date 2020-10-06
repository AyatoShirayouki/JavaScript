let input = [3,2,5,1];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let x= +gets();
let s = 0;
//print(x);
let min; let max; let average = 0; let sum = 0; let arr = [];

for (let i = 0; i < x; i++) {
    arr.push( +gets() );
}

for (let j = 0; j < arr.length; j++) {
   //print(arr[j]);
   sum += arr[j];
}
print('min=' + Math.min.apply(null, arr).toFixed(2));
print('max=' + Math.max.apply(null, arr).toFixed(2));
print('sum=' + sum.toFixed(2));
print('avg=' + (sum/(arr.length)).toFixed(2));