// mảng trong javascript
//1. khai báo
arr = [];
arr1 = [12,32,12,32,12]
arr2 = ["Apple","Organ","abc"]
arr3 = Array();
arr4 = Array("Chung","Trinh","Van");
//----------
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
//2. truy cập
arr[0] = 100; // gán
console.log("arr[0]=",arr[0]);
console.log("arr[1]=",arr[1]); // lấy giá  trị


arr1[2] = 12345;
console.log(arr1);

//. duyệt  mảng: for, for ... of, ...
for (let i = 0; i < arr1.length; i++) {
   console.log(arr1[i]);
} 
console.log("for ... of");

for(let item of arr1){
    console.log(item);
}

// các phương thức
arr1.push(9999);
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.unshift(99999999);
console.log(arr1);
arr1.shift(99999999);
console.log(arr1);

// ví dụ: 10p
/*
    Tạo mảng ngẫu nhiên 10 phần tử, các phần tử là số nguyên có 2 chữ số
    - In ra các phần tử
    - Tính tổng các phần tử
    - đếm các số chẵn, số lẻ
*/