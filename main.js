let serial=document.querySelector(".serial")
let generate=document.querySelector(".generate")


let a='012356789abcdefghjklmnopqrstvwxyzABCDEFJHIGKLMNOPQRSTVWXYZ!@#%^&*'

// a=Array.from(a)

// console.log(a)
// console.log(a[Math.floor(Math.random()*a.length)])
// console.log("#################")
generate.onclick=function(){
    let b="";
    for(i=0;i<10;i++){
        b+=a[Math.floor(Math.random()*a.length)]
    }
    
    serial.innerHTML=b

}