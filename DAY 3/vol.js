function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var par=document.getElementById("par");
    if(age>18){
        par.innerHTML="Eligible to vote";
    }else{
        par.innerHTML="You are not eligible";
    }
}