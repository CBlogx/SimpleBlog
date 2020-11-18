function showimg(){
    var img=document.getElementsByClassName("qrcode");
    for(var i=0;i<img.length;i++){
        img[i].style.display="block";
    }
}
function hiddenimg(){
    var img=document.getElementsByClassName("qrcode");
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";
    }
}