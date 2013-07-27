var letterCapitalize = function(sentence){
    var letterArray = [];
    var words = sentence.split(" ")
   for ( var i = 0; i < words.length; i ++){
    if(words[i].charAt(0) != words[i].charAt(0).toUpperCase){
  letterArray[letterArray.length] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
}   
}
return letterArray.join(" ");
};
letterCapitalize("hello how are you?");