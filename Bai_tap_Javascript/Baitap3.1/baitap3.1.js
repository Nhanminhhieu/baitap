window.onload = function veBieuDo() {
    for (var i = 0; i < 5; i++)
        drawLine(150*i,150*i,286*i,286*i)
}
function drawLine(startX, startY, endX, endY){
    var c = document.getElementById("cavas_chart");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(startX, endX);
    ctx.lineTo(endY, startX);

    ctx.strokeStyle = "red";
    ctx.stroke();

}