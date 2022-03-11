
var roomtempture = document.getElementById("roomtempture").value;
var getresult = document.getElementById("getresult");
var used = document.getElementById("used");

function selectVa() {

    getresult.addEventListener("click", function () {
        location.reload();
        alert(roomtempture);
    })
}
