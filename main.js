let title = document.querySelectorAll("h1");
let dark = document.getElementById("dark")
let but = document.getElementById("but")
let but2 = document.getElementById("but2")



but2.addEventListener("click", () => {

title.forEach( item => {
item.style.textAlign = "center"
item.style.fontSize = "100px"
item.classList.add("big2")
})
dark.classList.add("dark")

})
but.addEventListener("click", () => {

title.forEach( item => {
item.style.textAlign = "center"
item.style.fontSize = "100px"
item.classList.remove("big2")
})
dark.classList.remove("dark")

})













