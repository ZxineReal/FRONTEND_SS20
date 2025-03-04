let number = Number(prompt("Mời bạn nhập vào một số nguyên: "));
let sum = 0;

if(isNaN(number) === false && number > 0){
  for (let i=1;i<=number;i++){
    sum += i
    }  
} else {
    sum = "dữ liệu nhập vào không hợp lệ";
}

console.log(sum);

