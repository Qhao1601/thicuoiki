// java rèn buộc dữ liệu của from . phải đăng nhập đầy đủ đúng điều kiện mới load về trang chủ
function validation(){
     const phoneNumber = document.Formfill.number.value;
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Điền tên đăng nhập*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Ít nhất sáu chữ cái*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Nhập email của bạn*";
        return false;
    }
    else if(document.Formfill.number.value==""){
        document.getElementById("result").innerHTML="Nhập Sđt của bạn*";
        return false;
    }
    else if (!/^[0-9]{11}$/.test(phoneNumber)) {
        result.innerHTML = "Sđt đúng 11 số không chứa chữ*";
        return false;
    }
    else if(document.Formfill.PassWord.value==""){
        document.getElementById("result").innerHTML="Nhập password của bạn*";
        return false;
    }
    else if(document.Formfill.PassWord.value.length<6){
        document.getElementById("result").innerHTML="Mật khẩu phải có 6 chữ số*";
        return false;
    }
    else if(document.Formfill.CPassWord.value==""){
        document.getElementById("result").innerHTML="Nhập mật khẩu xác nhận";
        return false;
    }
    else if(document.Formfill.CPassWord.value !== document.Formfill.PassWord.value ){
        document.getElementById("result").innerHTML="Mật khẩu không khớp";
        return false;
    }
    else{
        window.location.href="../templates/trangchu.html";
        return false;
    }
    
}