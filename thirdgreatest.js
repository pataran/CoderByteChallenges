var thirdGreatest = function(str){
var arr = [];
for( var i = 0; i<str.length; i++){
     arr[arr.length] = str[i]
     
    function sortByLengthDesc(a, b) {
if (a.length > b.length)
return -1;
if (a.length < b.length)
return 1;
return 0;
}

    arr.sort(sortByLengthDesc);

  }  
 return (arr[2]);

};
thirdGreatest(["hello","charles","Grapefruit","tulips","here","why"]);

