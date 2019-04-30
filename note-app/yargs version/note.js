const fs = require('fs')

const fetchNote = ()=>
{
    try
        {
            return (JSON.parse(fs.readFileSync("note.json")));
        }
    catch(err)
        {
            return [];
        }

}
const addNote = (title,body)=>
{
    
    let notes=fetchNote()    
    let note={
        title,
        body
    }
      

                let filterNote = notes.filter((note)=>note.title===title)
                if(filterNote.length===0)
                {
                    notes.push(note)
                    fs.writeFileSync("note.json",JSON.stringify(notes))
                    console.log("note added")
                    console.log(note)
                }
                else
                {
                    console.log('title already used')
                }
            }
          


const removeNote = (title)=>
{
    let notes=fetchNote()
    let note ={
        title
    }
    if (note.title)
    {
        let checkNote = notes.filter((note)=>note.title==title)
        if(checkNote.length==0)
        {
            console.log('note not found')
        }else{
            let filterNote = notes.filter((note)=>note.title!==title)
            fs.writeFileSync("note.json",JSON.stringify(filterNote))
            console.log('note removed')
            
        }
    }else{
        err()
    }
   

   
}
const readNote = (title)=>
{
    let notes=fetchNote()
    let note={
        title
    }
    if (note.title) 
    {
        let filterNote = notes.filter((note)=>note.title===title)
        if(filterNote.length !==0)
        {
             
            console.log("read note")
            console.log(filterNote[0])
        }
        else{
             console.log('note not found')
        }
    }
    else{
        err()
    }
   
}
const getAllNotes = ()=>
{
    let notes=fetchNote()
    let noteQte = notes.length
    if (noteQte===0)
    {
        console.log("printing 0 note(s)")
    }
    else{
        console.log("printing" , noteQte , "note(s)")
        console.log('all note listed')
        console.log(notes)

    }
    
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    getAllNotes
}