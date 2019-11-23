var pw = document.getElementById("pw");
var cpw = document.getElementById("cpw")
var btn = document.getElementById("btn");
btn.onclick = function(){
    function checkPass(){
        var pw=document.getElementById("pw").value;
        var cpw=document.getElementById("cpw").value;
        if(pw!=cpw){
        alert("密码不一致，请重新输入！");
        return false;
        } else{
            alert("提交成功")
        }
        return true;
    }
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pw.value)){
        return checkPass();
    }
    else{
        alert("密码的格式有误")
    }
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(cpw.value)){
        return checkPass();
    }
    else{
        alert("确认密码的格式有误")
    }
}