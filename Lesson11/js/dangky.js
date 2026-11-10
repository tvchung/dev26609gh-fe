
const fn_dangky = ()=>{
    debugger;
    //alert("running....");
    // kiểm tra họ tên không được trống
    let check=true;
    let ht = document.getElementById("hoten").value;
    if(ht.trim()==""){
        document.getElementById("errHoten").innerText="Bạn chưa nhập họ và tên";
        document.getElementById("errHoten").classList.remove("success");
        document.getElementById("errHoten").classList.add("error");
        check=false;
    }else{
         // kiểm tra họ tên chỉ chứa ký tự alphabet HOA,  khoảng trắng, ít nhất 2 ký tự
        let pattern = /^[A-Z ]{2,}$/;
        if(!pattern.test(ht)){
            document.getElementById("errHoten").innerText="Họ và tên chỉ được chứa ký tự alphabet HOA và khoảng trắng, ít nhất 2 ký tự.";
            document.getElementById("errHoten").classList.remove("success");
            document.getElementById("errHoten").classList.add("error");
            check=false;
        }else{
            document.getElementById("errHoten").innerText="ok";
            document.getElementById("errHoten").classList.remove("error");
            document.getElementById("errHoten").classList.add("success");
        }
    }
    
    // kiểm tra email
    let email = document.getElementById("email").value;
    if(email.trim()==""){
        document.getElementById("errEmail").innerText="Email không được để trống.";
        document.getElementById("errEmail").classList.add("error"); 
        check=false;  
    }else{
        // kiểm tra email hợp lệ
        let pattern= /^[a-zA-Z0-9._]+[a-zA-Z0-9_]+@[a-zA-Z0-9-_]+\.[a-zA-Z]{2,4}$/;
        if(!pattern.test(email)){
            document.getElementById("errEmail").innerText="Email không đúng định dạng.";
            document.getElementById("errEmail").classList.add("error"); 
            check=false;  
        }else{
            document.getElementById("errEmail").innerText="ok";
            document.getElementById("errEmail").classList.add("success");
        }
    }
    // phone
    let phone = document.getElementById("phone").value;
    if(phone.trim()==""){
        document.getElementById("errPhone").innerText="Số điện thoại không được để trống.";
        document.getElementById("errPhone").classList.add("error"); 
        check=false;  
    }else{
        document.getElementById("errPhone").innerText="ok";
        document.getElementById("errPhone").classList.add("success");
    }
    // giới tính
    let gender = document.querySelector('input[name="gt"]:checked');
    if(gender==null){
        document.getElementById("errGender").innerText="Bạn chưa chọn giới tính.";
        document.getElementById("errGender").classList.add("error"); 
        check=false;  
    }else{
        document.getElementById("errGender").innerText="ok";
        document.getElementById("errGender").classList.add("success");
    }

    // sở thích
    let soThich = document.querySelectorAll('input[name="sothich"]:checked');
    if(soThich.length==0){
        document.getElementById("errSoThich").innerText="Bạn chưa chọn sở thích.";
        document.getElementById("errSoThich").classList.add("error"); 
        check=false;  
    }else{
        document.getElementById("errSoThich").innerText="ok";
        document.getElementById("errSoThich").classList.add("success");
    }
    // mật khẩu
    let mk = document.getElementById("matKhau").value;
    if(mk.trim()==""){
        document.getElementById("errPassword").innerText="Mật khẩu không được để trống.";
        document.getElementById("errPassword").classList.add("error"); 
        check=false;  
    }else{
        document.getElementById("errPassword").innerText="ok";
        document.getElementById("errPassword").classList.add("success");
    }   

    // xác nhận mật khẩu
    let xnmk = document.getElementById("xnmatkhau").value;
    if(xnmk.trim()==""){
        document.getElementById("errConfirmPassword").innerText="Vui lòng nhập xác nhận mật khẩu";
        document.getElementById("errConfirmPassword").classList.add("error"); 
        check=false;    
    }else{
        document.getElementById("errConfirmPassword").innerText="ok";
        document.getElementById("errConfirmPassword").classList.add("success");
    }
    // if(xnmk != mk){
    //     document.getElementById("errConfirmPassword").innerText="Mật khẩu xác nhận không khớp.";
    //     document.getElementById("errConfirmPassword").classList.add("error"); 
    //     check=false;    
    // }else{
    //     document.getElementById("errConfirmPassword").innerText="ok";
    //     document.getElementById("errConfirmPassword").classList.add("success");
    // }

    let diachi = document.getElementById("diaChi").value;
    if(diachi.trim()==""){
        document.getElementById("errAddress").innerText="Địa chỉ không được để trống.";
        document.getElementById("errAddress").classList.add("error");
        check=false;  
    }else{
        document.getElementById("errAddress").innerText="ok";
        document.getElementById("errAddress").classList.add("success");
    }

   
    return false;
}