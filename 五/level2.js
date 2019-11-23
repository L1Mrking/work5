var phone = document.getElementById("phone");
var btn = document.getElementById("btn");
btn.onclick = function(){
    if(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone.value)){
        alert("提交成功")
    }
    else{
        alert("格式有误")
    }
}