let str = String(prompt("Mời bạn nhập vào một chuỗi: "));
let letter = prompt("Mời bạn nhập kí tự cần tìm kiếm: ");
let flag = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == letter) {
    flag = 1;
    break;
  }
}

if (flag == 1) {
  console.log("Tồn tại kí tự cần tìm kiếm");
} else {
  console.log("Không tồn tại kí tự cần tìm kiếm");
}
