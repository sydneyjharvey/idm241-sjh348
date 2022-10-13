const cart = document.querySelector("#cart");
const pointer = document.querySelector("#pointer");
const circle = document.querySelector("#circle");
document.getElementById("element").addEventListener("mouseover", myFunction);

let x = 0;
function myFunction() {
    console.log("Mouseover");
    cart.classList.toggle("cartanim");
    pointer.classList.toggle("pointeranim");
    circle.classList.toggle("circleanim");
    x = 1;
    setTimeout(5000);
}

document.getElementById("element").addEventListener("mouseout", myFunction2);

function myFunction2() {
    if (x = 1) {
        console.log("Mouseout");
        cart.classList.toggle("cartanim2");
        pointer.classList.toggle("pointeranim2");
        circle.classList.toggle("circleanim2");
        setTimeout(5000);
    }
    else {
        console.log("x = 0");
        setTimeout(5000);
    }
}