function create(){
    var bubbles=document.getElementById("Idbottom")
    var Odiv=document.createElement("div");
    var bubblesWidth = bubbles.clientWidth;
    Odiv.className="bubble";
    var random=5*Math.random()+2;
    var css="transform:translate("+bubblesWidth*Math.random()+"px,0) scale("+Math.random()+");"
    css+="animation:bubble "+random+"s ease-in-out;"
    Odiv.style.cssText =css;
    bubbles.appendChild(Odiv);
    setTimeout(function(){
      Odiv.style.display="none";
    },random*1000);
 }
function count(){
    for(var j=0;j<20;j++){
      create();
    }
  }
  
function scrollup(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
function scrolldown(){
    window.scrollTo({
        top:10000,
        behavior:"smooth"
    });
}