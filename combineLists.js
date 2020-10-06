const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['2,3,1','5,2,3']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  let list1 = gets().split(',').map(Number);
  let list2 = gets().split(',').map(Number);
  let arr = [];

 for (let i = 0; i < list1.length; i++) {
     arr.push(list1[i]);
     arr.push(list2[i]);
 }

 let str = "";

 for (let i = 0; i < arr.length; i++) {
     if(i != arr.length - 1){
        str += arr[i] + ",";
     }
     else{
         str += arr[i];
     }
 }
 print(str);