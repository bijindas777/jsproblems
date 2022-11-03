// program to find the largest among three numbers

//take input from the user

const num1=6;
const num2=18;
const num3=27;



let largest = (
    (num1>=num2?((num1>=num3)?num1:num3):((num2>num3)?num2:num3) )

)
console.log("The Largest Number is " + largest);