// function myForm(e){
//     var xs = document.forms["name"].value;
//     if(xs == ""){
//         alert("Plaese fill this and then conteniou")
//         return false;
//     }
//     else{
//         return"welcome dear friends"
//     }
// }

async function formValidationFetch(){
    let propro = new Promise(function(resolve,reject){
        let xml = new XMLHttpRequest();
        xml.open("GET","kuduka.html");
        xml.onload = function(){
            if(xml.status == 200){
                resolve(xml.response);
            }else{
                reject("Page not found");
            }
        }
        xml.send();
    });
    document.getElementById("form").innerHTML = await propro;
}
formValidationFetch();

///^[A-Za-z]+$/
///^[0-9]+$/
///^[0-9a-zA-Z]+$/


function myFom(){
    let text;
  if(document.getElementById("number").validity.rangeOverflow){
    text = "Too low, ple enter correct one";
  }else{
    text = "Good, go ahead";
  }
  document.getElementById("result").innerHTML = text;
}
