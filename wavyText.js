function initWavyText(id) {
    let div = document.getElementById(id)
    let text = div.firstElementChild.innerText;
    div.removeChild(div.firstElementChild);

    for (let i = 0; i < text.length; i++) {
        let el = document.createElement('span');
        let textEl = document.createElement("p")
        textEl.appendChild(document.createTextNode(text.charAt(i)))
        el.setAttribute("phase", i);
        el.appendChild(textEl);
        div.appendChild(el)
    }
}

initWavyText("wavy")

let time = 0;
let period = 2;
let amplitude = 5;
let wavyText = document.getElementById("wavy");

function anim() {
    if(period * time > 2 * Math.PI) {
        time = 0;
    }
    for (let i = 0; i < wavyText.children.length; i++) {
        let el = wavyText.children[i];
        let phase = el.getAttribute("phase");
        
        let offsety = amplitude * Math.sin(period * time + phase/2)
        let offsetx = -amplitude * Math.cos(period * time + phase/2)
        
        el.style.transform = `translate(${offsetx}px, ${offsety}px)`
    }
    time += 6 / 100;
    window.requestAnimationFrame(anim);
    
}

window.requestAnimationFrame(anim);
