let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn');
let list = document.getElementById("list"); 

createBtn.onclick = (e) => {
    e.preventDefault();
    let newNote = document.createElement("div")
    newNote.classList.add('note');
    newNote.innerHTML = `
                <span class="close">&times</span>
                <textarea placeholder="Escreva Aqui..." rows="10" cols="30"></textarea>`
    newNote.style.borderColor = color.value;
    list.appendChild(newNote);
};

document.addEventListener('click', (e)=>{
    let btnClose = e.target;
    if (btnClose.classList.contains('close')) {
        btnClose.parentNode.remove();
    }
})

let cursor = {
    x: null, // cordenadas do mouse
    y: null
}

let note = { //evento de arrastar
    dom: null, //nota arrastada
    x: null, //coordenada iniciais
    y: null
}




document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('note')) {
        cursor = {
            x: event.clientX,
            y: event.clientY
        }

        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        }
        let currentZindex = event.target.style.zIndex || 0;
        event.target.style.zIndex = parseInt(currentZindex) + 10;
    }
})

document.addEventListener('mousemove', (event) => {
    if (note.dom == null) return;
    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }

    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }
    note.dom.style.cursor = 'grab';
    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
})

document.addEventListener('mouseup', (event) => {
    if (note.dom == null) return;
    note.dom.style.cursor = 'auto';
    note.dom=null;


    

})




