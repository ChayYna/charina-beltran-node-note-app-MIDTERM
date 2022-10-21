const fs = require ('fs')

const del = function(id, oldNote) {

const note = JSON.parse(oldNote)
//delete new note to old note

const newNote = note.filter(function(n,i) {
    return n.id !== id;

})
fs.writeFileSync('note.txt', JSON.stringify(newNote));
}
module.exports = del