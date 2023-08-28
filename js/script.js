let curr = document.querySelector("#current")
let arrows = document.querySelectorAll("[data-arrow]");
let imgs = document.querySelectorAll(".offer__slide");

arrows.forEach((arrow, idx) => {
    arrow.onclick = () => {

        if (idx === 0 && curr.innerHTML > 1) {
            curr.innerHTML = `0${+curr.innerHTML - 1}`
            
        } else if (idx === 1 && curr.innerHTML < 4) {
            curr.innerHTML = `0${+curr.innerHTML + 1}`
            
        }

        imgs[curr.innerHTML-1].classList.remove('hide')
    }
})