var toggle = document.getElementById("container_2");
var body = document.querySelector("body");

toggle.onclick = function(){
    toggle.classList.toggle("active");
   let val= body.classList.toggle("active");
   localStorage.setItem("container_2",val)   
}

let valor=localStorage.getItem("container_2")

if (valor === "true"){
    body.classList.add("active")
}else{
    body.classList.remove("active")
}

