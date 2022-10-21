const add = require('./add')
const read = require('./read')
const write = require('./write')
const del = require('./del')
const update = require('./update')

//get user input
const data = process.argv
var note = {}

if (data[2] == 'add') {

//build object
note = {
    id: data[3], 
    title: data[4],
    body: data[5]
}
//get old note value
var oldNote = read()
//add note to note.txt
add(note, oldNote)

}
if(data[2] == 'read') {
    //import present
    const present = require('./present')

    present(read())
}
if (data[2] = 'update') {
    const note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    const oldNote = read()

    update(note, oldNote)

    console.log(update);
}
if (data[2] == 'delete') {
    //get old note values
    const oldNote = read()
    //get id to delete from note
    const id = data[3]

    del(id, oldNote)

    console.log(read())
}