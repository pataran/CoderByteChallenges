
function ArrayAddition(arr) { 
		var answer = {};
		var largestnumber = [];
		var numbercounter = 0;
		var  total = 0;
   for( var i = 0; i < arr.length; i++){
     largestnumber[largestnumber.length] = arr[i]
         if(arr[i] > numbercounter){
        numbercounter = arr[i]             
         }
 }
   for( var k = 0; k < largestnumber.length; k ++){
       if(largestnumber[k] === numbercounter){
          largestnumber.splice(k,1);     
        }
}
         for(var i in largestnumber){
      total += largestnumber[i];
   
         }
     if(total === numbercounter){
           answer[numbercounter] = true;
         }else{
           answer[numbercounter] = false;
}
            return answer;
                  
          }
ArrayAddition([4, 6, 23, 10,1, 3]);




/*

function LetterCapitalize(str) {
   var arr = [];
  var word = str.split(" ");
  for( var i = 0; i<word.length; i++){
    if(word[i].charAt(0)!=word[i].charAt(0).toUpperCase()){
		arr[arr.length] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
      }
 
  return arr.join(" ");
         
}
LetterCapitalize("How are you?")



//////////////Bianca's refactor///////  
  
  
  Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Use the Parameter Testing feature in the box below to test your code with different arguments.


function ArrayAddition(arr) { 
    var largestValue,
    smallerNumbersArray =[],
    total = 0;

   largestValue = arr.sort(function(a,b){return b-a})[0];

   smallerNumbersArray = arr.sort(function(a,b){return b-a}).slice(1);
   console.log(smallerNumbersArray);
    //adds all smaller values in smallerNumbers array together and sets it to total
    for(var i = 0; i < smallerNumbersArray.length; i++) {
      total += smallerNumbersArray[i];
    };
    //if total is equal to the largestnumber return true else false
    if(total === largestValue) return true;

    return false;
           
};
ArrayAddition([4, 6, 23, 10, 3]);

*/
