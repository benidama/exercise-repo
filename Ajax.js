function Ajaxx(){
    let xttpp = new XMLHttpRequest();
    xttpp.onload = function(){
        document.getElementById("ajax").innerHTML = this.responseText;
    };
    xttpp.open("GET","kuduka.txt");
    xttpp.send();
}