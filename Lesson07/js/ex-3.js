let a=10;
let b=3;

console.log("Thực hiện các phép tính số học: *, / , +, -, //, %, **, ++, --");

console.log("Nhân: ", a*b);
console.log("Chia: ", a/b);
console.log("Cộng: ", a+b);
console.log("Trừ: ", a-b);
// console.log("Chia nguyên: ", a/b);
console.log("Chia dư: ", a%b);
console.log("Lũy thừa: ", a**b);
a++;
console.log("Tăng a++: ", a);
a--;
console.log("Giảm a--: ", a);
console.log("Giảm ---a: ", --a);

a += 15;
console.log("a+=15 => ", a);


student = {}
console.log(student);
console.log(typeof(student));

student = {
    name:"Chung Chung",
    age:45
}
console.log(student);
console.log(typeof(student));

function  fnshow(){
    console.log("adbfs");
}
console.log(typeof(fnshow));