let menu = document.querySelector("nav")

document.querySelector(".izquierda").addEventListener("click", function(){
    menu.classList.toggle("active")
})

document.querySelector("nav").addEventListener("click", function(){
    menu.classList.remove("active")
})
let menu1 = document.querySelector(".main")

document.querySelector(".izquierda").addEventListener("click", function(){
    menu1.classList.toggle("active")
})

document.querySelector(".main").addEventListener("click", function(){
    menu1.classList.remove("active")
})
let menu2 = document.querySelector(".main1")

document.querySelector(".izquierda").addEventListener("click", function(){
    menu2.classList.toggle("active")
})

document.querySelector(".main1").addEventListener("click", function(){
    menu2.classList.remove("active")
})
