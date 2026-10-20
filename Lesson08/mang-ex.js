// ví dụ: 10p
/*
    Tạo mảng ngẫu nhiên 10 phần tử, các phần tử là số nguyên có 2 chữ số
    - In ra các phần tử
    - Tính tổng các phần tử
    - đếm các số chẵn, số lẻ
*/

mang =[];
// sinh mảng ngẫu nhiên
for(let i=0;  i<10; i++){
    mang[i] = Math.floor(Math.random()*89) + 10
}
console.log(mang);

chan=0;
le=0;
tong=0;
for(let i =0 ; i<10; i++){
    console.log(mang[i]);
    tong +=mang[i];
    if(mang[i]%2 == 0)
        chan++;
    else
        le++
}
console.log("Tong:",tong,"Chan:",chan,"Lẻ:",le);
