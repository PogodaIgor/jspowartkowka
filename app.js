let click = 20;
function wieksza(){
    click = click + 2
    document.getElementById("wieksza").innerHTML;
    document.getElementById("czcionka").style.fontSize = click + "px"
}
function mniejsza(){
    click = click - 4
    document.getElementById("mniejsza").innerHTML;
    document.getElementById("czcionka").style.fontSize = click + "px"
}
function ramka(){
    document.getElementById("pies").style.border = "5px solid black"
}
function nieramka(){
    document.getElementById("pies").style.border = "none"
}