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

document.getElementById("gourd_overlay").addEventListener("mouseenter", gourdEnter);

async function gourdEnter() {
    console.log("gourdEnter");
    await sleep(50);
    gourd_overlay.classList.add("gourdanim");
    console.log("2");
    await sleep(50);
    gourd_overlay.classList.remove("gourdanim2");
}
document.getElementById("gourd_overlay").addEventListener("mouseleave", gourdLeave);

async function gourdLeave() {
    console.log("gourdLeave");
    await sleep(50);
    gourd_overlay.classList.add("gourdanim2");
    console.log("2");
    await sleep(50);
    gourd_overlay.classList.remove("gourdanim");
}

document.getElementById("keycap_overlay").addEventListener("mouseenter", keycapEnter);

async function keycapEnter() {
    console.log("keycapEnter");
    await sleep(50);
    keycap_overlay.classList.add("keycapanim");
    console.log("2");
    await sleep(50);
    keycap_overlay.classList.remove("keycapanim2");
}
document.getElementById("keycap_overlay").addEventListener("mouseleave", keycapLeave);

async function keycapLeave() {
    console.log("keycapLeave");
    await sleep(50);
    keycap_overlay.classList.add("keycapanim2");
    console.log("2");
    await sleep(50);
    keycap_overlay.classList.remove("keycapanim");
}

document.getElementById("buttons_overlay").addEventListener("mouseenter", buttonsEnter);

async function buttonsEnter() {
    console.log("buttonsEnter");
    await sleep(50);
    buttons_overlay.classList.add("buttonsanim");
    console.log("2");
    await sleep(50);
    buttons_overlay.classList.remove("buttonsanim2");
}
document.getElementById("buttons_overlay").addEventListener("mouseleave", buttonsLeave);

async function buttonsLeave() {
    console.log("buttonsLeave");
    await sleep(50);
    buttons_overlay.classList.add("buttonsanim2");
    console.log("2");
    await sleep(50);
    buttons_overlay.classList.remove("buttonsanim");
}


let cart_number = 3;

const gourd_value = 8.99;
let gourd_number = 1;

const keycap_value = 1.89;
let keycap_number = 1;

const buttons_value = 2.24;
let buttons_number = 1;

function stringToHTML() {
    var gourd_cost = gourd_value * gourd_number;
    var gourd_text1 = "$" + String(gourd_value) + " x" + String(gourd_number);
    var gourd_text2 = "$" + String(gourd_cost);
    console.log(gourd_text1);
    console.log(gourd_text2);
    g_text1.innerHTML = gourd_text1;
    g_text2.innerHTML = gourd_text2;
    g_text3.innerHTML = gourd_number;

    var keycap_cost = keycap_value * keycap_number;
    var keycap_text1 = "$" + String(keycap_value) + " x" + String(keycap_number);
    var keycap_text2 = "$" + String(keycap_cost);
    console.log(keycap_text1);
    console.log(keycap_text2);
    k_text1.innerHTML = keycap_text1;
    k_text2.innerHTML = keycap_text2;
    k_text3.innerHTML = keycap_number;

    var buttons_cost = buttons_value * buttons_number;
    var buttons_text1 = "$" + String(buttons_value) + " x" + String(buttons_number);
    var buttons_text2 = "$" + String(buttons_cost);
    console.log(buttons_text1);
    console.log(buttons_text2);
    b_text1.innerHTML = buttons_text1;
    b_text2.innerHTML = buttons_text2;
    b_text3.innerHTML = buttons_number;
}
stringToHTML();

const g_less_btn = document.getElementById('G-');

g_less_btn.addEventListener('click', function() {
    console.log('Gourd-1');
    if (gourd_number > 0) {
        gourd_number = gourd_number - 1;
        console.log("1 less gourd!")
        stringToHTML();
    }
    else {
        console.log("Gourd Number = 0!")
    }
});

const g_more_btn = document.getElementById('G+');

g_more_btn.addEventListener('click', function() {
    console.log('Gourd+1');
    gourd_number = gourd_number + 1;
    console.log("1 more gourd!")
    stringToHTML();
});

const k_less_btn = document.getElementById('K-');

k_less_btn.addEventListener('click', function() {
    console.log('Keycap-1');
    if (keycap_number > 0) {
        keycap_number = keycap_number - 1;
        console.log("1 less keycap!")
        stringToHTML();
    }
    else {
        console.log("Keycap Number = 0!")
    }
});

const k_more_btn = document.getElementById('K+');

k_more_btn.addEventListener('click', function() {
    console.log('Keycap+1');
    keycap_number = keycap_number + 1;
    console.log("1 more keycap!")
    stringToHTML();
});

const b_less_btn = document.getElementById('B-');

b_less_btn.addEventListener('click', function() {
    console.log('Buttons-1');
    if (buttons_number > 0) {
        buttons_number = buttons_number - 1;
        console.log("1 less buttons!")
        stringToHTML();
    }
    else {
        console.log("Buttons Number = 0!")
    }
});

const b_more_btn = document.getElementById('B+');

b_more_btn.addEventListener('click', function() {
    console.log('Buttons+1');
    buttons_number = buttons_number + 1;
    console.log("1 more buttons!")
    stringToHTML();
});