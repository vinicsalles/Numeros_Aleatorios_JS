const numberModifier = document.querySelector("h2");
const buttonConclusion = document.querySelector(".button");

const calc = () =>{
    return Math.floor(Math.random() * 100).toFixed(0);
}


const modificando = () => {
    let numbermod = calc();
    numberModifier.innerHTML = numbermod
}

buttonConclusion.addEventListener('click', () => {
    modificando()

})