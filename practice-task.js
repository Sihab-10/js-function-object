/* 
1. Write a function foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output. Now call the foo to see the output.
*/

/* function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
foo(); */

/* 
2. Write a function called make_avg() which will take an three integers and return the average those values.
*/

/* function make_avg(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  var avg = sum / 3;

  return avg;
}

const avg = make_avg(4, 3, 5);
console.log("The averge of three integers is:", avg); */

/* 
//----------------------------------------------- not solved---------------------------
3. Write a function called make_array_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
// const arr = [13, 25, 35, 40];
// const n = arr.length;
// const sum = 0;
// function make_array_avg(arr, n) {
//   for (const i = 0; i < n; i++) {
//     const sum = sum + arr[i];
//     const avg = sum / 4;
//     return avg;
//   }
// }
// const avg_of_int = make_array_avg();
// console.log("The average of three integers is:", avg_of_int);

// another way

// const arr1 = [1, 2, 3, 4, 5];
// var number = 0;
// for (var number of arr1) {
//   var sum = sum + number;
// }
// var avg = sum / arr1.length;
// console.log(avg);
//----------------------------------------------- not solved---------------------------

// write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
/* function odd_even(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
var odd_or_even = odd_even(4); */

/* 
you are in a hurry to go to school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. so write a js code where a there is a variable called signal. its value can be green, yellow or red & we will get different activities as output depending on the variable. So, Hurry Up.
*/

// if (signal == "red") {
//   console.log("if you try to cross the road, you may be in danger.");
// } else if (signal == "yellow") {
//   console.log("you should stop.");
// } else if (signal == "green") {
//   console.log("you should cross the road.");
// } else {
//   console.log("There is something wrong in the traffic signal");
// }
//lets try switch to do the same task

const signal = "green";
switch (signal) {
  case "red":
    console.log("if you try to cross the road, you may be in danger.");
    break;
  case "yellow":
    console.log("you should stop.");
    break;
  case "green":
    console.log("you should cross the road.");
    break;
  default:
    console.log("There is something wrong in the traffic signal");
}
