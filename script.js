const btn=document.querySelectorAll(".btn")
const input=document.querySelector(".value")
let str=""

btn.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        if(e.target.innerText == '='){
            str=eval(str)
            input.value =str
        }
        else if(e.target.innerText== 'AC'){
            str =''
            input.value =str
        }
        else if(e.target.innerText== 'DE'){
            let str1=str.toString().substring(0,(str.length-1))
            str=str1
            input.value=str
        }
        else{
            console.log(e.target.innerText)
            str += e.target.innerText
            input.value =str
        }
    })
})