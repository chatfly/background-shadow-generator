var horizontal = document.querySelector(".inputhorizontal")
var vertical = document.querySelector(".inputvertical")
var blurinput = document.querySelector(".inputblur")
var spread = document.querySelector(".inputspread")
var check = document.querySelector(".inputcheck")
var color = document.querySelector(".color")

var onoff = Boolean(false)

horizontal.addEventListener("input", () => {
    document.querySelector(".horizontal").innerHTML = horizontal.value
    if (onoff == true){
        document.getElementById("caixa").style.boxShadow = `inset ${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
    else if (onoff == false){
        document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
})

vertical.addEventListener("input", () => {
    document.querySelector(".vertical").innerHTML = vertical.value
    if (onoff == true){
        document.getElementById("caixa").style.boxShadow = `inset ${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
    else if (onoff == false){
        document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
})

blurinput.addEventListener("input", () => {
    document.querySelector(".blur").innerHTML = blurinput.value
    if (onoff == true){
        document.getElementById("caixa").style.boxShadow = `inset ${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
    else if (onoff == false){
        document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
})

spread.addEventListener("input", () => {
    document.querySelector(".spread").innerHTML = spread.value
    if (onoff == true){
        document.getElementById("caixa").style.boxShadow = `inset ${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
    else if (onoff == false){
        document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
})

color.addEventListener("input", () => {
    if (onoff == true){
        document.getElementById("caixa").style.boxShadow = `inset ${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
    else if (onoff == false){
        document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
})

function checkFuncao(){
    document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${spread.value}px ${color.value}`
    if (onoff == true){
        onoff = false
        document.getElementById("caixa").style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
    else if (onoff == false){
        onoff = true
        document.getElementById("caixa").style.boxShadow = `inset ${horizontal.value}px ${vertical.value}px ${blurinput.value}px ${color.value}`
    }
}