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
    if(d.getHours()<10){
        var time = "0"+d.getHours();
    }
    else{
        var time = d.getHours();
    }
    if(d.getMinutes()<10){
         time+=":0"+d.getMinutes();
    }
    else{
         time+=":"+d.getMinutes();
    }
    if(d.getSeconds()<10){
        time+=":0"+d.getSeconds();
    }
    else{
        time+=":"+d.getSeconds();
    }
    document.getElementById("Time").innerText=datetime+" "+time; 
}

var Index = 0,Sindex= 1,Indextime,flag=0,Timeout;
function Currentslide(n) {
  showSlide(Sindex = n);
  clearTimeout(Indextime);
  if(flag){
    flag=0;
    Index=Sindex-1;
    Timeout=setTimeout(showSlides,5000);
  }
}
function showSlides(){
    var i;
    var slides=document.getElementsByClassName("Slidepic");
    var dots=document.getElementsByClassName("dot");
    var describles=document.getElementsByClassName("describle");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for(i=0;i<dots.length;i++){
        dots[i].className="dot";
    }
    for(i=0;i<describles.length;i++){
        describles[i].style.display="none";
    }
    Index++;
    if(Index>slides.length){Index=1;}
    clearTimeout(Timeout);
    slides[Index-1].style.display = "block"; 
    dots[Index-1].className = "dot active";
    describles[Index-1].style.display="inline-block";
    Indextime=setTimeout(showSlides,3500);
}
function showSlide(n){
  var i,j;
  var slides = document.getElementsByClassName("Slidepic");
  var dots=document.getElementsByClassName("dot");
  var describles=document.getElementsByClassName("describle");
  flag=1;
  if (n > slides.length) {Sindex = 1} 
  if (n < 1) {Sindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for(j=0;j<dots.length;j++){
    dots[j].className="dot";
  }
  for(i=0;i<describles.length;i++){
    describles[i].style.display="none";
  }
  describles[Sindex-1].style.display="inline-block";
  dots[Sindex-1].className="dot active";
  slides[Sindex-1].style.display = "block"; 
}
