function ExOh(str) { 
  xtotal = 0;
  ototal = 0; 
  for (var i = 0; i<str.length; i++){
    if(str[i] === "x"){
      xtotal += 1;
    }
  }
    for (var j = 0; j<str.length; j++){
      if(str[j] === "o"){
        ototal +=1;
        
      }
    }
  if (xtotal === ototal){
    return true
      }else{
        
    return false
      }
  }