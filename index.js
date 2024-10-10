// function gahundaNimwe(){
//     const ar = ['Amani','Joanes','QUI','Mwanafunzi'];
//      ar.filter(el =>{
//         if(el.length > 4){
//                return ar;
//         }else{
//             return "Not found";
//         }
//     })     
// }
// document.getElementById('rita').innerHTML = gahundaNimwe();
console.log('afsshsh');
function asnOne(an){
document.getElementById('rita').innerHTML = an;
}

function AsyncFun(a,b,calla){
    let sum = a+ b;
    calla(sum);
}
// document.getElementById.innerHTML = 
AsyncFun(740,56,asnOne);
console.log('amateka')
console.log('amateka')
console.log('amateka')

console.log('jsjsjyfdfdfffdjs');

console.log('wooooooooooooooo');
console.log('wooooooooooooooo');
console.log('wooooooooooooooo');
console.log('wooooooooooooooo');

// function mPromise(m){
    
    // document.getElementById('demo').innerHTML = m;
    // }
    
    let amaporo = new Promise(function(Resolve,Reject){
        let i = 7;
        if(i > 5){
            Resolve('Ok');
        }else{
            Reject('Not found');
        }
    });
    amaporo.then(
        function(value){document.getElementById('demo').innerHTML =  value;},
        function(error){document.getElementById('demo').innerHTML =  error;}
    );
    
    console.log('amateka')
    
    // function tryi(ayoo){
    //     document.getElementById("ty").innerHTML = ayoo;
    // }
    // function callbwPromise(callback){
    //     const reque = new XMLHttpRequest();
    //     reque.onload = function(){
    //         if(reque.status == 200){
    //           callback(this.responseText); 
    //         } else{
    //             callback('Error: '+ reque.status)
    //         }
    //     }
    //     reque.open('GET', 'index.html');
    //     reque.send();
    // }
    // callbwPromise(tryi);
    
    function trui(haci){
        document.getElementById('kuduko').innerHTML = haci;
    }
    
const Promises = new Promise(function(resolve, reject){
let req = new XMLHttpRequest();
req.open ("GET","index.html");
req.onload = function(){
    if(req.status == 200){
        resolve(req.response);
    }else{
        reject("Not found");
    }
};
 req.send();
} );
Promises.then(
    function(value){trui(value);},
    function(error){trui(error);}
);

async function TryingNow(){
    return "This is the new version of returning my async function especially by using async js";
}

TryingNow().then(
    function(val){document.getElementById('asc').innerHTML = val;},
)

async function moreAsync(){
    let rep = new Promise(function(resolve,reject){
        let joni = new XMLHttpRequest();
        joni.open("GET","kuduka.html");
        joni.onload = function(){
            if(joni.status == 200){
                resolve(joni.response);
            }else{
                reject("Page not found");
            }
            joni.send();
        };
    });
    document.getElementById('ok').innerHTML = await rep;
    console.log(arguments.callee.name)
}
moreAsync();


