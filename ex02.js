let number = Number(prompt("Mời bạn nhập vào một số: "));
let numberContainer = "";

if (isNaN(number) === false && number > 0) {
  for (let i = 1; i <= number; i++) {
    if (i % 5 == 0) {
      numberContainer += i + ", ";
    }
  }
  if (numberContainer === "") {
    console.log("Không có số chia hết cho 5!");
  } else {
    console.log(
      "Các số chia hết cho 5 từ 1 đến " + number + " là: " + numberContainer
    );
  }
} else {
  console.log("Không hợp lệ!");
}
