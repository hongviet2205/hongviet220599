var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var passcu = 'admin';
function validate(){
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    let check = true;
    if(user.trim().length == 0){
        document.getElementById('loiuser').innerHTML = " Nhập Username";
        check = false;
    }else{
        document.getElementById('loiuser').innerHTML = "";
    }
    if (pass.trim().length == 0) {
        document.getElementById('loipass').innerHTML = "Nhập Pass";
        check = false;
    }else{
        document.getElementById('loipass').innerHTML = "";
    }
    if (user !== "admin" && user != null) {
        document.getElementById('loipass').innerHTML = "Sai User";
        check = false;
        
    }else{
        document.getElementById('loipass').innerHTML = "";
    }
    if (pass !== passcu && pass != null ) {
        document.getElementById('loipass').innerHTML = "Sai Password";
        check = false;
    }else{
        document.getElementById('loipass').innerHTML = "";
    }
    if (check) {
        document.getElementById('dangnhap').innerText = "Đăng Nhập Thành Công !!!";
        document.getElementById('dangnhap').style.background = 'blue';
        document.getElementById('login').style.display = "none";
        
    }
        
    }
function lammoi(){
    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('oldpass').value = "";
    document.getElementById('newpass').value = "";
    document.getElementById('loipass').value = "";
    document.getElementById('loiuser').value = "";
    document.getElementById('loioldpass').value = "";
    document.getElementById('loinewpass').value = "";
    document.getElementById('tcong').value = "";
}
function loaddinga(){
    document.getElementById('loadding').innerHTML = 'Loading...';
    setTimeout(function(){
        validate();
        document.getElementById('loadding').innerHTML = 'Login';
    }, 1000);
}
function fotgot(){
    lammoi();
    document.getElementById('login').style.display = "none";
    document.getElementById('save').style.display = "block";
    document.getElementById('dangnhap').style.display = "none"
}
function back (){
    document.getElementById('save').style.display = "none";
    document.getElementById('login').style.display = "block";
}
function validatenew(){
    const oldpass = document.getElementById('oldpass').value;
    const newpass = document.getElementById('newpass').value;


    if(oldpass.trim().length == 0){
        document.getElementById('loioldpass').innerHTML ="Nhập Lại Mật Khẩu Cũ";
        return false;
    }
    else{
        document.getElementById('loioldpass').innerHTML = "";
    }
    if (oldpass !== passcu) {
        document.getElementById('loioldpass').innerHTML = "Sai mật khẩu cũ";
        return false;
    }
    else{
        document.getElementById('loioldpass').innerHTML = "";
    }
    if (newpass.trim().length == 0) {
        document.getElementById('loinewpass').innerHTML = "Nhập mật khẩu mới";
        return false;
        
    }
    else{
        document.getElementById('loinewpass').innerHTML = "";
    }
    if (newpass == oldpass) {
        document.getElementById('loinewpass').innerHTML = "Mật khẩu mới phải khác với mật khẩu cũ";
        return false;
        
    }
    else{
        document.getElementById('loinewpass').innerHTML = "";
    }
    if (true) {
        passcu = newpass;
        document.getElementById('tcong').innerHTML = "Bạn đã đổi mật khẩu thành công";
        document.getElementById('login').style.display ="block";
        document.getElementById('save').style.display = "none";
        
    }
}

