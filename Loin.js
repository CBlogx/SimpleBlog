var index=0;
function start(){
    var top=document.getElementById("Top");
    var middle=document.getElementById("Middle");
    var bottom=document.getElementById("Bottom");
    var blog=document.getElementById("blog");
    top.className="go";
    middle.className="out";
    bottom.className="down";
    blog.className="blog";
    index=1;
    page();
    setTimeout(stop,5990);
}
function stop(){
    if(index){
        var top=document.getElementById("Top");
        var middle=document.getElementById("Middle");
        var bottom=document.getElementById("Bottom");
        var blog=document.getElementById("blog");
        top.style.display="none";
        middle.style.display="none";
        bottom.style.display="none";
        blog.style.display="none";
    }
}
function page(){
    if(index){
        var page=document.getElementById("page");
        page.className="Page";
    }
}