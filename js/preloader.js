let lines = document.querySelectorAll("#front line");
let svg = document.getElementById("loader");
let preloader = document.getElementById("container")

// Setting proper viewBox for the svg element
let box = svg.getBBox();
svg.setAttribute("viewBox",`${box.x} ${box.y} ${box.width} ${box.height}`)

function run() {
  for (let i = 0; i < lines.length; i += 1) {
    let currLine = lines[i];
    setStyle(currLine, i);
    removeStyle(currLine, i);
  }
  
  function setStyle(currElement, i) {
    // setting delay 0.06 * i for making sure the next animated element will get styles when the preveios finishes 
    setTimeout(() => {
      currElement.setAttribute('style', `stroke: 
#9A999F; stroke-dasharray: ${currElement.getTotalLength()}px; stroke-dashoffset: ${currElement.getTotalLength()}px; animation: dash 0.1s ease-out forwards 0.1s; animation-delay: ${0.06 * i}s`)
    }, i);
  }
  
  function removeStyle(element, i) {
    setTimeout(() => {
      element.removeAttribute("style")
    }, (100 * (i + 2)) - ((i + 1) * 20)); //100 * i + 2 - how fast we want to reset style. Each element is increasing its reset time with increasing i. For making the anumation smoother at the end, we can compensate by substracting (i + 1) * 20. Feel free to play around constants and find your perfect timing
  }
}

run();

let playInterval = setInterval(run, 1200);

setTimeout(() => {
    document.body.style.overflow = "auto";
    preloader.style.opacity = 0
}, 2000)

setTimeout(() => {
    preloader.style.display = "none";
    clearInterval(playInterval)
}, 2100)