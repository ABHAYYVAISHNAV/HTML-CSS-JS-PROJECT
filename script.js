const inputBox=document.getElementById("inputbox")
const list=document.getElementById("list_cont")

const button=document.getElementById("addbutton")
button.addEventListener("click",addtask)

function addtask(){
    if(inputBox.value===""){
        alert("add some taks")
    }
    else{
        let li=document.createElement("li")
        li.innerText=inputBox.value
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerText="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    savedata()
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        // alert("Clicked on LI");
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
savedata()    
}
},false)

function savedata(){
    localStorage.setItem("data",list.innerHTML)
}
function showdata(){
    list.innerHTML=localStorage.getItem("data")
}
showdata()