function SwapCase(str) { 
    var words = [];
  for( var i = 0; i<str.length; i++){
	if(str[i] === str[i].toLowerCase()){
		var caps = str[i].toUpperCase();
		words.push(caps);  
	}else{
		var lowercaps = str[i].toLowerCase();
		words.push(lowercaps);       
	}
      
}
	return words.join("");
}
SwapCase("hEllO All");

