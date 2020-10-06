const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['5,3,2,1','2']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  let list1 = gets().split(',').map(Number);
  let arr = [];
  let n = gets();

  for (let i = 0; i < list1.length; i++) {
      arr.push(list1[i]);
  }

  function rotate(nums, n) {
    n = n % nums.length;
    return nums.slice(n).concat(nums.slice(0, n))
  }
   arr = rotate(arr, n);

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
