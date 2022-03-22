
var roomtempture = document.getElementById("roomtempture");   //室溫
var waternum = document.getElementById("waternum");           //水溫
var flotrTempture = document.getElementById("flotrTempture"); //粉溫
var flotrFriction = document.getElementById("flotrFriction"); //摩擦係數

var getresult = document.getElementById("getresult");
var used = document.getElementById("used");

var restart = 0;

    getresult.addEventListener("click", function () {
        var tempdata = [4];
        tempdata[0] = roomtempture.value;
        tempdata[1] = waternum
        tempdata[2] = flotrTempture
        tempdata[3] = flotrFriction
        used.innerHTML = "室溫"+tempdata[0] +';<br> 水溫'+ waternum.value +';<br> 麵粉溫'+flotrTempture.value+';<br> 模擦係數'+flotrFriction.value+"<br>";
        return false;
    })
