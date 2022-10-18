const cart = document.querySelector("#cart");
const pointer = document.querySelector("#pointer");
const circle = document.querySelector("#circle");
document.getElementById("element").addEventListener("mouseenter", cartEnter);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cartEnter() {
    console.log("Mouseover");
    await sleep(500);
    cart.classList.add("cartanim");
    pointer.classList.add("pointeranim");
    circle.classList.add("circleanim");
    console.log("1");
    await sleep(500);
    cart.classList.remove("cartanim2");
    pointer.classList.remove("pointeranim2");
    circle.classList.remove("circleanim2");
}

document.getElementById("element").addEventListener("mouseleave", cartLeave);

async function cartLeave() {
    console.log("Mouseleave");
    await sleep(500);
    cart.classList.add("cartanim2");
    pointer.classList.add("pointeranim2");
    circle.classList.add("circleanim2");
    console.log("2");
    await sleep(500);
    cart.classList.remove("cartanim");
    pointer.classList.remove("pointeranim");
    circle.classList.remove("circleanim");
}