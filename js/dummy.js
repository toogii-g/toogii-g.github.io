x=1;
var a=5;
var b= 10;
console.log(x);
var c = function(a,b,c){
    console.log(x);
    console.log(a);
    var f = function(a,b,c){
        b=a;
        console.log(b);
        b=c;
        var x= 5;
    }
    f(a,b,c);
    console.log(b);
    var x=10;
}
    c(8,9,10);
    console.log(b);
    console.log(x);

var z=9;
function zfunction(){
    return z *z;
}
console.log(zfunction());
z=5;
console.log(zfunction());

var y=1;
function bar (){
    if(!y){
        if(!y){
            const y=10;
        }
        alert(y);
    }
}
bar();