const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['123.45']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  //let numbers = gets().split(', ').map(Number)
  let n = +gets();
  
  print(reversedNum(n));

  function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }


  
  