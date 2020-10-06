const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['3']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  //let numbers = gets().split(' ').map(Number)
   
let number = +gets();
let result = "";
for (i = 1; i <= number; i++) {
    for (j = i; j < number + i; j++) {
        result += j;
    }
    print(result)
    result = "";
}
  

  