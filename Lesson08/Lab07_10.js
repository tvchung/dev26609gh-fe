/*
Bài 10. Đảo số và tổng chữ số (Nâng cao)
Mục tiêu: dùng while khi chưa biết trước số lần lặp; tách chữ số bằng % 10 
và Math.floor(n / 10).
Yêu cầu: với số nguyên dương n, in số đảo ngược và tổng các chữ số. 
Sau đó kiểm tra n có phải số đối xứng (palindrome) hay không.
*/

n = 123456789; // => so dao  nguoc: 54321
/*
    1. Lấy số cuối: socuoi=n%10  => socuoi = 5
    2. Bỏ số cuối: n=n/10; => n=1234
*/
    //1..
    //soCuoi = n%10;
    //2.
    // n=Math.floor(n/10);
    // console.log("Số cuối:", soCuoi);
    // console.log("Bỏ số cuối:",n)
/*
    3. xếp số cuối  lên đầu
    daoNguoc = 5

    4. quay lại thực tách (B1, B2) => 4 => ghep: daoNguoc = 54 = 5*10 + 4
    // 543 = 5*100 + 4*10 + 3  = 54*10 + 3
    // 5432 = 543*10 + 2
    daoNguoc = daoNguoc*10 + soCuoi
*/
n=12321;
soBanDau=n;
daoNguoc=0;
i=1;

tong = 0;
while(n>0){
    let soCuoi = n%10;
    tong += soCuoi;
    daoNguoc = daoNguoc*10 + soCuoi;
    console.log("Lần ",i++,":",daoNguoc);
    n = Math.floor(n/10); // Lầy phần còn lại
}
console.log("Số đảo ngược:",daoNguoc,"Tổng:",tong);

if(soBanDau === daoNguoc){
    console.log("Số đối xưng");
}else{
    console.log("Số  không đối xứng");
     
}