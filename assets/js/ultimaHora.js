
const ColorsArray = ["#557588","#4C8AB9","#84C0F7", "#D0E9FB", "#91ce7b", "white"];
const e = ["😀","😄","💢","🥰","😥"];



function cambiarColor(){
    const fondo = document.getElementById("fondo");
    var r = Math.floor(Math.random()*6);
    fondo.style.backgroundColor = ColorsArray[r];

    for(var i=1; i<=6;i++){
        const emoji = document.getElementById("emoji"+i);
        var num = "";
        for(var x=0; x<=4; x++){
            var r = Math.floor(Math.random()*100);
            num = num + r + e[x];
        }
        emoji.textContent = num;
    }
}