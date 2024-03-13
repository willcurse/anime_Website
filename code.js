var crsr=document.querySelector("#cursor img")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"
})