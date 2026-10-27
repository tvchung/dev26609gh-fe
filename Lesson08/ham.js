// 1. function
// 1. định  nghĩa  ham với function
function show(){
    console.log("Hello,..");
}
// gọi hàm
show();
// hàm có tham  số:
function showName(name){
    console.log("Hello,", name);
}
showName();
showName("Chung  Trịnh");
// hàm có tham số tùy chon
function showName1(name="Devmaster"){
    console.log("Hello,", name);
}
showName1();
showName1("Chung  Trịnh");

// hàm trả về giá trị: return

function add(a,b){
    return a+b;
}

result = add(132,212);
console.log(result);
console.log(add(100,200));
console.log(add());

//2. function  expression

const hello = function(){
    console.log("Xin chao, toi la function expression");
}
hello();


// 3. ES6. Arrow  function

const sum = (a,b=100)=>{
    return a+b;
}
console.log(sum(200)); // 300
console.log(sum(100,500)); // 600


// bài tập: viết  hàm giải phương trình bậc 1
/*
    giaiPT1 = (a,b)=>{
        ....
        }
*/

// Viết hàm kiểm tra số num có phải là số nguyên tố không??
