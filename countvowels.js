

var findvowel = function(){	  
	     var vowels = ["a", "e", "i", "o", "u"];
		 var counter = 0;
		 var str = results.split("");        
    for (var j = 0;  j < vowels.length; j ++){ 
    for (var k =0; k < str.length; k++){
            if (vowels[j] == str[k]){
				counter = counter + 1;
				} 
		    }   
	}
	console.log(counter);
	};
	findvowel(results);