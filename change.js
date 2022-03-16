const button=document.getElementById("btn")
const body=document.body
const color=["red","green","pink","yellow","pink","purple"]
body.style.backgroundColor=color[0]
button.addEventListener('click',changeBackground)
function changeBackground(){
   const color_index=Math.floor(Math.random()*color.length)
   body.style.backgroundColor=color[color_index]
}