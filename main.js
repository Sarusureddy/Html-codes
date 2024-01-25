function Visible(){
    document.getElementById("input").style.display="block";
}

var Score=0;

function decrease(){
    Score=Score-10;
    document.getElementById("box").textContent=Score;
}
function increase(){
    Score=Score+10;
    document.getElementById("box").textContent=Score;
}