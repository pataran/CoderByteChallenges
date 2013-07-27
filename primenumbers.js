
function primeTwo(number){
var primeObj = {};
if (number < 2){
    return false;}
    for (var i = 2; i < number; i ++)
    if  (number%i == 0){
    return false;
    }
    return true;
}
for (var i = 0; i<100; i++){
    if (primeTwo(i)){
    primeObj[i] = i;
    }
    return primeObj
};
primeTwo(number);