var flag=0;
function Add(){
    var input=document.getElementById("file");
    var file=document.getElementById("file");
    file.click();
    input.onchange=function(){
        if(flag==0){
            var result=document.getElementById("Mid-Bot2-img");
            var addimg=document.getElementById("addimg");
            addimg.style.display="none";
            var create=document.createElement("img");
            result.appendChild(create);
            create.id="img";
            flag=1;
        }
        showDataByURL();
    }
}

function showDataByURL() {
    var getfile = document.getElementById("file").files[0];
        var reader = new FileReader();                
        reader.readAsDataURL(getfile);
        reader.onload=function(){
            var img=document.getElementById("img");
            img.src=""+this.result+"";
        }
        
}