
function SecondGreatLow(arr) { 
     var secondlargest;
     secondlargest = arr.sort(function(a,b){return a-b})[arr.length - 2];
     var secondlowest = arr[1];
  
  
  // code goes here  
  return secondlowest + " " + secondlargest; 
         
}
SecondGreatLow(46,52,40,29,100,500);
