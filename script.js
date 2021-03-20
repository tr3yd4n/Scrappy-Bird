let block = document.getElementById("block")
let hole = document.getElementById("hole")
let character = document.getElementById("character")

hole.addEventListener("animationiteration", () => {
    let random = -((Math.random()*300)+150)
    hole.style.top = random + "px"
})