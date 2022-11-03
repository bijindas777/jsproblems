// program to find the largest among three numbers

//take input from the user

const num1=6;
const num2=8;
const num3=7;



let largest;

if(num1 >=num2 && num1 >= num3){
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3){
     largest = num2;
}
else{
    largest = num3;
}

console.log("The Largest Number is " + largest);