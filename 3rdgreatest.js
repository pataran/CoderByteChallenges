function ThirdGreatest(strArr) {
var orderdesc = strArr.sort(function(a,b){return b.length-a.length})
console.log(orderdesc); 
var thirdgreatest = "";
for ( var i = 0; i < orderdesc.length; i ++){
if (orderdesc[2].length <= orderdesc[i].length){
      thirdgreatest = orderdesc[i]; 
  }
}
return thirdgreatest;
  }
ThirdGreatest(["hello","patrick","patrice","katrice","bianca","more","holloway","bolloway","flight"])