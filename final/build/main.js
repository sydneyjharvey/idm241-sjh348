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
    cart_items.classList.add("cart_itemsanim");
    console.log("1");
    await sleep(500);
    cart.classList.remove("cartanim2");
    pointer.classList.remove("pointeranim2");
    circle.classList.remove("circleanim2");
    cart_items.classList.remove("cart_itemsanim2");
}

document.getElementById("element").addEventListener("mouseleave", cartLeave);

async function cartLeave() {
    console.log("Mouseleave");
    await sleep(500);
    cart.classList.add("cartanim2");
    pointer.classList.add("pointeranim2");
    circle.classList.add("circleanim2");
    cart_items.classList.add("cart_itemsanim2");
    console.log("2");
    await sleep(500);
    cart.classList.remove("cartanim");
    pointer.classList.remove("pointeranim");
    circle.classList.remove("circleanim");
    cart_items.classList.remove("cart_itemsanim");
}

document.getElementById("gourdimg").addEventListener("mouseenter", gourdEnter);

async function gourdEnter() {
    console.log("gourdEnter");
    await sleep(50);
    gourdimg.classList.add("gourdanim");
    console.log("2");
    await sleep(50);
    gourdimg.classList.remove("gourdanim2");
}
document.getElementById("gourdimg").addEventListener("mouseleave", gourdLeave);

async function gourdLeave() {
    console.log("gourdLeave");
    await sleep(50);
    gourdimg.classList.add("gourdanim2");
    console.log("2");
    await sleep(50);
    gourdimg.classList.remove("gourdanim");
}

document.getElementById("keycapimg").addEventListener("mouseenter", keycapEnter);

async function keycapEnter() {
    console.log("keycapEnter");
    await sleep(50);
    keycapimg.classList.add("keycapanim");
    console.log("2");
    await sleep(50);
    keycapimg.classList.remove("keycapanim2");
}
document.getElementById("keycapimg").addEventListener("mouseleave", keycapLeave);

async function keycapLeave() {
    console.log("keycapLeave");
    await sleep(50);
    keycapimg.classList.add("keycapanim2");
    console.log("2");
    await sleep(50);
    keycapimg.classList.remove("keycapanim");
}

document.getElementById("buttonsimg").addEventListener("mouseenter", buttonsEnter);

async function buttonsEnter() {
    console.log("buttonsEnter");
    await sleep(50);
    buttonsimg.classList.add("buttonsanim");
    console.log("2");
    await sleep(50);
    buttonsimg.classList.remove("buttonsanim2");
}
document.getElementById("buttonsimg").addEventListener("mouseleave", buttonsLeave);

async function buttonsLeave() {
    console.log("buttonsLeave");
    await sleep(50);
    buttonsimg.classList.add("buttonsanim2");
    console.log("2");
    await sleep(50);
    buttonsimg.classList.remove("buttonsanim");
}


let cart_number = 3;

const gourd_value = 8.99;
let gourd_number = 1;
let gourd_cost = 1;

const cap_value = 1.19;
let cap_number = 1;
let cap_cost = 1;

const button_value = 2.24;
let button_number = 1;
let button_cost = 1;

let gourd_text1 = "$" + "gourd_value" + " x" + "gourd_number";
let gourd_text2 = "$" + "gourd_cost";