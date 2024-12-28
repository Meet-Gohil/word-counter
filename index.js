let textbox=document.getElementById("textbox");

function fun1(){
    let text =this.value;
    let char = text.length;
    document.getElementById("char").innerHTML=char;

    text=text.trim();
    let w = text.split(" ");
    let start=w.filter(function(elm){
        return elm!="";
    });
    document.getElementById("word").innerHTML=start.length;
}
textbox.addEventListener("input",fun1);



