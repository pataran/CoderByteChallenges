	var numberAddition = function(str){
	var total = 0
	var number =  str.match(/\d+/g);
	var numberparse = [];
for(var i = 0; i<number.length; i++){
	numberparse[numberparse.length] = parseInt(number[i]);
}
for( var v in numberparse){
		total += numberparse[v];
}
console.log(total);

}
numberAddition("88Hello 3worl3d!45");
