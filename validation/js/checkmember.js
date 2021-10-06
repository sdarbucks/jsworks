
function checkMember(){
    var form = document.regForm;
    var id = form.memberid.value;
    var pwd = form.passwd.value;

    var regEx = /^[A-Za-z]{5}$/;

    // 아이디는 4자에서 8자까지 입력가능
    if(id.length < 4 || id.length > 8){
        alert("아이디는 4자에서 8자까지 입력해 주세요");
        form.id.select();
        return false;
    }else if(regEx.test(pwd)){  // 패스워드와 정규식이 일치하지 않으면 
        alert("패스워드는 5자에서 10자까지 영문을 입력해주세요");
        form.pwd.select();
        return false
    }else{
        form.submit();
    }
}