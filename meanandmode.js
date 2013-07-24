function meanMode(arr) { 
	var frequency = {};
	var total = 0;
	var max = 0;
	var mode;
	var mean;
//find mode
for (var j in arr){
	frequency[arr[j]] = (frequency[arr[j]] || 0) + 1
		if(frequency[arr[j]] > max){
		max = frequency[arr[j]];
		mode = arr[j];
	}
}
////////gets mean
for (var i in arr){
    total+= arr[i];
}
 mean = total/arr.length;
///does mean equal mode?
if (mean === mode){
    return 1;
}else{
    return 0;
}
}
meanMode([5, 3, 3, 3, 1]);