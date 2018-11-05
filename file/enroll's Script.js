function f()
{
    var a=document.getElementById("username").value;
    var b=document.getElementById("psw").value;
    var c=document.getElementById("repsw").value;


    if (a==null||a=="") document.getElementById("yhm").innerHTML="*用户名不能为空!*";
    if (a.indexOf(" ") == -1)
    {
        if((a.length>=1&&a.length<=5)||a.length>=13) document.getElementById("yhm").innerHTML="*用户名应由6-12个字符组成!*";
    }
    else document.getElementById("yhm").innerHTML="*用户名不能包含空格!*";
    if(a.length>=6&&a.length<=12&&a.indexOf(" ") == -1) var a1=0;
    if(a1==0) document.getElementById("yhm").innerHTML="&nbsp;";


    if (b==null||b=="") document.getElementById("srmm").innerHTML="*密码不能为空!*";
    if ((b.length>=1&&b.length<=5)||b.length>=13||isNaN(b))  
    {
        document.getElementById("srmm").innerHTML="*密码应由6-12个数字组成!*";
        document.getElementById("psw").value=null;
    }
    if(b.length>=6&&b.length<=12&&isNaN(b)==0) var b1=0 ;
    if(b1==0) document.getElementById("srmm").innerHTML="&nbsp;"


    
    if(b1!=0) 
    {
        document.getElementById("repsw").value=null;
        document.getElementById("yzmm").innerHTML="&nbsp;"
    }
    if ((c==null||c=="")&&(b!=null&&b!="")&&b1==0) document.getElementById("yzmm").innerHTML="*请验证您的密码!*";
    if ((c==null||c=="")&&(b==null||b=="")) document.getElementById("yzmm").innerHTML="&nbsp;";
    if (c!=null&&c!=""&&b!=null&&b!=""&&b1==0&&c==b) 
    {
        document.getElementById("yzmm").innerHTML="&nbsp;";
        c1=0;
    }
    if (c!=null&&c!=""&&(b!=null&&b!="")&&b1==0&&c!=b)
    {
        document.getElementById("yzmm").innerHTML="*两次输入的密码不一致!*";
        document.getElementById("repsw").value=null;
    }
    if((c!=null||c!="")&&(b==null||b=="")) 
    {
        document.getElementById("yzmm").innerHTML="&nbsp;";
        document.getElementById("repsw").value=null;
    }
    if(a1==0&&b1==0&&c1==0)
    self.location='../李潇的个人主页（改）.html';
    alert("注册成功！");
}
