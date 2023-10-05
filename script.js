let wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', e => {
    if(e.target.classList.contains('btn1')) {
        divHidden(document.querySelector('.div1'));
    }
    if(e.target.classList.contains('btn2')) {
       divHidden(document.querySelector('.div2'));
    }
    if(e.target.classList.contains('btn3')) {
        divHidden(document.querySelector('.div3'));
    }
    if(e.target.classList.contains('btn4')) {
        divHidden(document.querySelector('.div4'));
    }
    if(e.target.classList.contains('btn5')) {
        divHidden(document.querySelector('.div5'));
    }
    if(e.target.classList.contains('btn6')) {
        divHidden(document.querySelector('.div6'));
    }
    if(e.target.classList.contains('btn7')) {
        divHidden(document.querySelector('.div7'));
    }
    if(e.target.classList.contains('btn8')) {
        divHidden(document.querySelector('.div8'));
    }
    if(e.target.classList.contains('btn9')) {
        divHidden(document.querySelector('.div9'));
    }
    if(e.target.classList.contains('btn10')) {
        divHidden(document.querySelector('.div10'));
    }
    else {
        return;
    }
})

function divHidden(textDiv) {
    if(textDiv.style.display==="none") {
        textDiv.style.display = "block";
    }
    else {
        textDiv.style.display = "none";
    }
}

