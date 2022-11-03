var e,x,d = 0;
var b = prompt("Enter a number");
x=b;

while(x>0){
    e=x%10;
    console.log('e'+e);
    x =parseInt(x/10);
    console.log('x'+x);
    d=d+(e*e*e)
    console.log('d'+d);
}
if(b==d)
alert("armstrong")
else
alert("not an armstrong")