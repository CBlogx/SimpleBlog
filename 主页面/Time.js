setInterval(function(){Time()},0);
function Time(){
    var d=new Date();
    if(d.getMonth()<9){
        var datetime=d.getFullYear()+"-0"+(d.getMonth()+1)+"-";
    }
    else{
        var datetime=d.getFullYear()+"-"+(d.getMonth()+1)+"-";
    }
    if(d.getDate()<10){
        datetime +="0"+d.getDate();
    }
    else{
        datetime +=d.getDate();
    }
    if(d.getMinutes()<10){
        var time=d.getHours()+":0"+d.getMinutes()+":"+d.getSeconds();
    }
    else{
        var time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    }
    if(d.getSeconds()<10){
        time=d.getHours()+":"+d.getMinutes()+":0"+d.getSeconds();
    }
    else{
        time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    }
    document.getElementById("Time").innerHTML=datetime+" "+time; 
}

var Index = 0;
var Sindex= 1;

function Currentslide(n) {showSlide(Sindex = n);}
function showSlides(){
    var i;
    var slides = document.getElementsByClassName("Slidepic");
    var dots=document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    Index++;
    if(Index>slides.length){Index=1;}
    slides[Index-1].style.display = "block"; 
    setTimeout(showSlides,3000);
}
function showSlide(n){
  var i;
  var slides = document.getElementsByClassName("Slidepic");
  if (n > slides.length) {Sindex = 1} 
  if (n < 1) {Sindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[Sindex-1].style.display = "block"; 
}
