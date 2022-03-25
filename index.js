
var roomtempture = document.getElementById("roomtempture");   //室溫
var waternum = document.getElementById("waternum");           //水溫
var flotrTempture = document.getElementById("flotrTempture"); //粉溫
var flotrFriction = document.getElementById("flotrFriction"); //摩擦係數
var wannatempture = document.getElementById("wannatempture"); //理想溫度
var flotrfinishTemp = document.getElementById("FlotrfinishTemp"); //麵團完成溫度

var getresult = document.getElementById("getresult");
var used = document.getElementById("used");

var restart = 0;

    getresult.addEventListener("click", function () {
        var tempdata = [6];
        tempdata[0] = roomtempture.value;
        tempdata[1] = waternum.value;
        tempdata[2] = flotrTempture.value;
        tempdata[3] = flotrFriction.value;
        tempdata[4] = wannatempture.value;
        tempdata[5] = flotrfinishTemp.value;

        used.innerHTML = "室溫"+tempdata[0] +';<br> 水溫'+ waternum.value +';<br> 麵粉溫'+flotrTempture.value+';<br> 模擦係數'+flotrFriction.value+'<br> 理想溫度'+flotrFriction.value;
        used.innerHTML += '<br>******<br>摩擦係數:'+((Number(tempdata[5])*3)-(Number(tempdata[0])+Number(tempdata[2])+Number(tempdata[1])));
        used.innerHTML += '<br>******<br>預計使用冰塊:'+((Number(tempdata[4])*3)-(Number(tempdata[0])+Number(tempdata[2])+Number(tempdata[3])));
        return false;
    })
