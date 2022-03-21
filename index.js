
var roomtempture = document.getElementById("roomtempture").value;   //室溫
var waternum = document.getElementById("waternum").value;           //水溫
var flotrTempture = document.getElementById("flotrTempture").value; //粉溫
var flotrFriction = document.getElementById("flotrFriction").value; //摩擦係數

var getresult = document.getElementById("getresult");
var used = document.getElementById("used");


function test (){


}


var restart = 0;
// function selectVa() {
    getresult.addEventListener("click", function () {
        var timeoutID = setTimeout(myAlert, 500);

        function myAlert() {
            //window.location.reload();
            alert('已刷新！');
        }
        timeoutID;
        var tempdata = [4];
        tempdata[0] = roomtempture;
        tempdata[1] = waternum
        tempdata[2] = flotrTempture
        tempdata[3] = flotrFriction

        // tempdata.forEach(function(v,i){
        //     used.innerHTML += tempdata[i]+"<br>";
        // })
        if (tempdata[0] != roomtempture &&　tempdata[1] != waternum){
            window.location.reload();
        }
        // used.innerHTML = tempdata[0]+"<br>";
        //getresult();
        // if (typeof(usedf) == "number"){
        //     location.reload();
        // }
        // usedf.innerHTML = typeof(roomtempture);
        used.innerHTML += "室溫"+roomtempture +';<br> 水溫'+waternum+';<br> 麵粉溫'+flotrTempture+';<br> 模擦係數'+flotrFriction+"<br>";
        // window.location.reload();
        clearTimeout(timeoutID);
        return false;
    })
// }

function getresult (){
    if(used.value == "") {

    }else {
        location.reload()
    }
}