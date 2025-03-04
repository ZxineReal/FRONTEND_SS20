let number = prompt("Mời bạn nhập vào số lượng số Fibonacci: ");
let numberContainer = "1 1";
let fib1 = 1;
let fib2 = 1;
let count = 2;

if (number > 0 && isNaN(number) == false)   {
  while (count < number) {
    let fibNext = fib1 + fib2;
    numberContainer += " " + fibNext;
    fib1 = fib2;
    fib2 = fibNext;
    count++;
  }
  console.log(numberContainer);
} else {
  console.log("Không hợp lệ");
}
