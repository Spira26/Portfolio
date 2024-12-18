const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const notes = []
function render () {
   
listElement.innerHTML = ''
if(notes.length === 0){
    listElement.innerHTML = '<p class="d-flex justify-content-center">Нет заметок</p>'
}
    for (let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note)) 
    // }
    
}
render()
createBtn.onclick = function () {
    const newNote = {
        title: inputElement.value,
        complited: false
    }
    if (inputElement.value.length === 0) {
return
    } else {
        notes.push(newNote)
    }
    render()
inputElement.value = ''
}

listElement.onclick = function (event) {
if (event.target.dataset.index){
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
notes[index].complited = !notes[index].complited 
    } else if (type === 'remove'){
notes.splice(index, 1)
    }
    render()
}
}

function getNoteTemplate (note, index) {
return  `<li class="list-group-item d-flex flex-column align-items-center mt-3 rounded">
<span class="${note.complited ? 'text-decoration-line-through' : ''}">${note.title}</span>
<span>
  <span class="btn  btn-small btn-${ note.complited ? 'warning' : 'success'}" data-index=${index} data-type="toggle">&check;</span>
  <span class="btn btn-small btn-danger" data-index=${index} data-type="remove">&times;</span>
</span>
</li>`
}