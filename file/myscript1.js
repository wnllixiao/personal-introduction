function startTime()
{
    var today=new Date();
    var year=today.getFullYear();
    var month=today.getMonth()+1;
    var date=today.getDate();
    var day=new Array(7);
        day[0]="日";
        day[1]="一";
        day[2]="二";
        day[3]="三";
        day[4]="四";
        day[5]="五";
        day[6]="六";
    var day=day[today.getDay()];
    var hour=today.getHours();
    var minute=today.getMinutes();
    var second=today.getSeconds();
    minute=checktime(minute);
    second=checktime(second);
    document.getElementById("date").innerHTML="今天是: "+year+"年"+month+"月"+date+"日"+" 星期"+day;
    document.getElementById("time").innerHTML="现在是: "+hour+"："+minute+"："+second;
    t=setTimeout(function(){startTime()},500);
    var nowhour=today.getHours();
    var a;
    if(nowhour>=5&&nowhour<=8)   a="早上好！";
    if(nowhour>=9&&nowhour<=11)  a="上午好！";
    if(nowhour>=12&&nowhour<=14) a="中午好！";
    if(nowhour>=15&&nowhour<=17) a="下午好！";
    if(nowhour>=18&&nowhour<=21) a="晚上好！";
    if(nowhour>=22||nowhour<=4)  a="晚安！";
    document.getElementById("welcome").innerHTML=a;
    document.getElementById("fixdate").innerHTML="修改日期：  2018年11月5日";
}

function checktime(x)
{if(x<10)
    {
        x="0"+x;
    }
return x;
}

function changebg()
{
    var x=document.getElementById("bgselection").value;
    if(x=="a") 
    {
        document.getElementById("bd").style.backgroundImage="url('file/pictures/bgp/51ece87378fbf17bcef45e5c477c24ea.jpg')";
        document.getElementById("top").style.backgroundImage="url('file/pictures/bgp/c597fb3eff228c51cbcd010dad058f9d.jpg')";
        document.getElementById("hello").style.textShadow="none";
        document.getElementById("part1").style.textShadow="none";
        document.getElementById("part2").style.textShadow="none";
        document.getElementById("tab").style.color="black";
        document.getElementById("hb").style.color="black";
        document.getElementById("part1").style.color="black";
        document.getElementById("part2").style.color="black";
        document.getElementById("top").style.color="black";
        document.getElementById("hobby1").style.color="black";
        document.getElementById("hobby2").style.color="black";
        document.getElementById("hobby3").style.color="black";
        document.getElementById("date").style.color="black";
        document.getElementById("me").style.color="blue";
        document.getElementById("experience").style.color="black";
        document.getElementById("time").style.color="black";
    }
    if(x=="b") 
    {
        document.getElementById("hello").style.textShadow="5px 5px 5px #FF0000";
        document.getElementById("part1").style.textShadow="5px 5px 5px #FF0000";
        document.getElementById("part2").style.textShadow="5px 5px 5px #FF0000";
        document.getElementById("bd").style.backgroundImage="url('file/pictures/bgp/Halloween1.jpg')";
        document.getElementById("top").style.backgroundImage="url('file/pictures/bgp/halloween2.jpg')";
        document.getElementById("tab").style.color="white";
        document.getElementById("me").style.color="white";
        document.getElementById("hb").style.color="white";
        document.getElementById("part1").style.color="black";
        document.getElementById("part2").style.color="black";
        document.getElementById("top").style.color="black";
        document.getElementById("hobby1").style.color="white";
        document.getElementById("hobby2").style.color="white";
        document.getElementById("hobby3").style.color="white";
        document.getElementById("date").style.color="black";
        document.getElementById("time").style.color="black";
        document.getElementById("experience").style.color="white";
    }
    if(x=="c")
    {
        document.getElementById("bd").style.backgroundImage="url('file/pictures/bgp/Christmas1.jpg')";
        document.getElementById("top").style.backgroundImage="url('file/pictures/bgp/christmas2.jpg')";
        document.getElementById("top").style.color="white";
        document.getElementById("date").style.color="purple";
        document.getElementById("time").style.color="purple";
        document.getElementById("hello").style.textShadow="5px 5px 5px gold";
        document.getElementById("part1").style.color="white";
        document.getElementById("part2").style.color="white";
        document.getElementById("tab").style.color="purple";
        document.getElementById("me").style.color="green";
        document.getElementById("hobby1").style.color="red";
        document.getElementById("hobby2").style.color="orange";
        document.getElementById("hobby3").style.color="yellow";
        document.getElementById("part1").style.textShadow="5px 5px 5px gold";
        document.getElementById("part2").style.textShadow="5px 5px 5px gold";
        document.getElementById("experience").style.color="brown";
    }
    var element=document.getElementById('pic1image');
    if(x=="a") 
    {
        element.src="file/pictures/pics for personal experience/cute Chinese dragon-green.png";
    }
    if(x=="b") 
    {
        element.src="file/pictures/pics for personal experience/Halloween goast-white&red.png";
    }
    if(x=="c") 
    {
        element.src="file/pictures/pics for personal experience/Christmas tree-green.png";
    }
}