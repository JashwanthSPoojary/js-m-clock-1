const hours = document.querySelector("#h")
const minutes = document.querySelector("#m")
const seconds = document.querySelector("#s")
const amorpm = document.querySelector("#amorpm")


function time(){
    const date = new Date();
    hours.textContent = date.toLocaleString('en-us',{hour:"numeric",minute:"numeric",second:"2-digit",hour12:true})
    requestAnimationFrame(time);
}


requestAnimationFrame(time);






