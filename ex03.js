let number = prompt("Mời bạn nhập vào chuỗi cần kiểm tra: ");
let reverseNumber = "";

if (isNaN(number) == false) {
  for (let i = number.length - 1; i >= 0; i--) {
    reverseNumber += number[i];
  }

  if (reverseNumber === number) {
    console.log("Là số đối xứng");
  } else {
    console.log("Không phải là số đối xứng");
  }
} else {
  console.log("Số không hợp lệ");
}
