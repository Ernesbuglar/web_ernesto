


let infodev = document.getElementById("dev")
let btn = document.getElementById("but-dev")

btn.onmouseover = function () {
    infodev.classList.remove("hidden")
}



infodev.onmouseleave = function () {
    infodev.classList.add("hidden")
}


