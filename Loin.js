var index=0;
function start(){
    var top=document.getElementById("Top");
    var middle=document.getElementById("Middle");
    var bottom=document.getElementById("Bottom");
    top.className="go";
    middle.className="out";
    bottom.className="down";
    index=1;
    setTimeout(stop,6000);
    page();
}
function stop(){
    if(index){
        var top=document.getElementById("Top");
        var middle=document.getElementById("Middle");
        var bottom=document.getElementById("Bottom");
        top.style.display="none";
        middle.style.display="none";
        bottom.style.display="none";
    }
}
function page(){
    if(index){
        var page=document.getElementById("page");
        page.className="Page";
    }
}