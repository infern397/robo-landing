const infoIcon = document.querySelector(".after__image")
const infoBlock = document.querySelector(".after__info")


infoIcon.addEventListener("mouseenter", () => {
    infoBlock.classList.toggle("after__info-open", true)
})

infoIcon.addEventListener("mouseleave", () => {
    infoBlock.classList.toggle("after__info-open", false)
})


const leftArrow = document.querySelector(".arrows__left")
const rightArrow = document.querySelector(".arrows__right")


leftArrow.addEventListener("click", () => {
    move("left")
})

rightArrow.addEventListener("click", () => {
    move("right")
})

function move(direction) {
    let list = document.querySelector(".trainers__list");

    let x = list.style.left;
    let imageMovingLength = 440

    if (x == "") { x = 0; }
    else { x = x.slice(0, -2); }

    if (direction == "right") {
        if (x > -imageMovingLength) {
            x = +x - imageMovingLength;
        }
    }
    else {
        if (x < 0) {
            x = +x + imageMovingLength;
        }
    }

    list.style.left = x + "px";

    moveScroll(direction);
}

function moveScroll(direction) {
    let scroll = document.querySelector(".controls__slider-mover");
    let x = scroll.style.left;
    let scrollMovingLength = 100

    if (x == "") { x = 0; }
    else { x = x.slice(0, -2); }

    if (direction == "left") {
        if (x > 0) {
            x = +x - scrollMovingLength;
        }
    }
    else {
        if (x < scrollMovingLength) {
            x = +x + scrollMovingLength;
        }
    }

    scroll.style.left = x + "px";
}