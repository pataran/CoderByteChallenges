function ArithGeo(arr) { 
var geo = 0
var arith = 0
    for (i = 0; i<arr.length; i++) {
     var geo = (arr[1] / arr[0])
     var arith = (arr[1] - arr[0])
         if (arr[1] * geo === arr[2]) {
          console.log("Geometric Sequence")
         }
      else if (arr[1] + arith === arr[2]) {
       console.log("Arithmetic sequence")
      }
      else {
       console.log("Neither") 
      }
    }
  
         
}
