
var btn=document.querySelector("button");
var result=document.querySelector(".result")
btn.addEventListener("click",()=>{
    
    var data=document.getElementById("data").value;
    data=data.trim().split("\n");
    var random=Math.floor(Math.random()*data.length);
    //console.log(data[random])
    result.textContent=data[random];
})












// var arr=["manish","santosh","saroj","monis","gopal","anupam"]
// var val=Math.floor(Math.random()*arr.length);
// console.log(arr[val]);
