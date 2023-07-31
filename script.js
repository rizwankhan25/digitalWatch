let hours = document.querySelector("#hr")
let minutes = document.querySelector("#minutes")
let second = document.querySelector("#second")
setInterval(() => {
    let cd = new Date();
    hours.textContent = cd.getHours()
    minutes.textContent = cd.getMinutes()
    second.textContent = cd.getSeconds()
},1000);