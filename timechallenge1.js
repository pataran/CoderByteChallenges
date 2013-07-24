function TimeConvert(num) { 
	
  var hour = Math.floor(num/60);
  var minutes = num%60;  
  
  return hour + ":" + minutes;     
}
TimeConvert(119);
/*
//////pedros time
function TimeConvert(num) { 
  m = num%60;
  h = (num-m)/60;
  // code goes here
  return h+':'+m; 
  }
  TimeConvert(69);
  */