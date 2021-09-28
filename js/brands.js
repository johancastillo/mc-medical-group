/* Effects Brands Image One */
let veincare = document.getElementById("brand-one")
let veincareImg = document.getElementById("brand-img-one")


let size = veincare.clientWidth * 2;
let size2 = veincare.clientWidth;
veincareImg.style.width = size + "px";


veincare.addEventListener("mouseover", () => {
    
    veincareImg.classList.add("activate")
    veincareImg.classList.remove("deactivate")
})

veincare.addEventListener("mouseout", () => {
    veincareImg.classList.add("deactivate")
})

/* Effects Brands Image Two */
let sipa = document.getElementById("brand-two")
let sipaImg1 = document.getElementById("brand-img-two1")
let sipaImg2 = document.getElementById("brand-img-two2")


sipaImg1.style.width = size2 + "px";
sipaImg2.style.width = size2 + "px";


sipa.addEventListener("mouseover", () => {
    sipaImg1.classList.add("activate")
    sipaImg1.classList.remove("deactivate")

    sipaImg2.classList.add("activate")
    sipaImg2.classList.remove("deactivate")
})

sipa.addEventListener("mouseout", () => {
    sipaImg1.classList.add("deactivate")
    sipaImg2.classList.add("deactivate")
})



/* Effects Brands Image Three */
let bastos = document.getElementById("brand-three")
let bastosImg = document.getElementById("brand-img-three")


bastosImg.style.width = size + "px";


bastos.addEventListener("mouseover", () => {
    
    bastosImg.classList.add("activate")
    bastosImg.classList.remove("deactivate")

    //console.log("Helloo!")
})

bastos.addEventListener("mouseout", () => {
    bastosImg.classList.add("deactivate")

    //console.log("Bye!")
})



