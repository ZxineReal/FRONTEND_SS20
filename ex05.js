let a = prompt("Mời bạn nhập vào số a: ");
let b = prompt("Mời bạn nhập vào bậc lũy thừa: ");
let total = 1;

if(isNaN(a) == false && isNaN(b) == false){
    for (i = 0; i < b; i++){
        total *= a;
    }
    console.log(total);
} else {
    console.log("Không hợp lệ");
}


