let input = [5, 2, 1, 1, 6, 3];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let x= +gets();
let even = 1;
let odd = 1;
//print(x);
let arr = [];
arr.push(x);

for (let i = 0; i < x; i++) {
    arr.push( +gets() );
}
for (let i = 1; i < arr.length; i++) {
   if (i % 2 == 0) {
       even *= arr[i];
   }
   else{
       odd *= arr[i];
   }
    
}
if (even == odd) {
    print("yes " + even);
}
else{
    print("no " + odd + " " + even)
}
