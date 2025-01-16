let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn');
let list = document.getElementById("list");

createBtn.onclick = (e) => {
    e.preventDefault();
    let newNote = document.createElement("div")
    newNote.classList.add('note');
    newNote.innerHTML = `
                <span class="close">x</span>
                <textarea placeholder="Escreva Aqui..." rows="10" cols="30"></textarea>`
    newNote.style.borderColor = color.value;
    list.appendChild(newNote);
};




