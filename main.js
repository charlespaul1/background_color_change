//targeting the button
const button = document.getElementById("button")

//generating random color using hexadecimal
const getRandomColor =() => {
    let symbols = "0123456789ABCDEF";
    let color = "#";//the symbols will be added randomly to color
    for (let i = 0; i < 6; i++){
        color += symbols[Math.floor(Math.random() * 16)]
    }
    return color
}
//change background function
const changeBackground = () => {
    //setting background color of the body
    document.body.style.backgroundColor = getRandomColor();
}
//adding an event listener to the button
button.addEventListener("click", changeBackground)
window.onload = () => {
    changeBackground();
}
