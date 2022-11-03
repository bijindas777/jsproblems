// Array = [2,4,6,8,10]



// sum=(Array.reduce(getSum,0))

// function getSum(total,num){
//     return total + num
// }


// console.log(sum);

const sum =[1,2,3,4,5].reduce((sum,num)=>sum + num,0);
console.log(sum);
