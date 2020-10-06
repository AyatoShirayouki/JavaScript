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
    'teleriktlrik',
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let x = gets();
let c = "";
c = x;

let nRep = [];


let count = 0;
for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c.length; j++) {
        if(c[i] == c[j]){
            
            count++;
        }
    }
    //print(count);
    if(count == 1){
        nRep.push(i);
    }
    count = 0;
}

if(nRep.length > 0){
    print(nRep[0]);
}
else{
    print(-1);
}

