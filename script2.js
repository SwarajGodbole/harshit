let x=function(f) {
    alert("Hello World!1")
}
let y=function(f) {
    alert("Hello World!2")
}


btn.addEventListener('click',x)
btn.addEventListener('click',y)
let a=prompt("Whats your favourite number")

if(a=="2")
{
    btn.removeEventListener('click',x)
}
