const fs = require('fs')
let command = process.argv[2]
const err = ()=>{
    
    if(command==="add")
    {

        console.log("option:")
        console.log("--help        Show help               [boolean]")
        console.log("--title,-t    Title of note           [required]")
        console.log("--body,-b     body of note            [required]")
        console.log('required Missing : title,body')

    }else if (command==="read" || command==="remove")
    {
        console.log("option:")
        console.log("--help        Show help               [boolean]")
        console.log("--title,-t    Title of note           [required]")
        console.log('required Missing : title')
    }
}
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
       if(note.title && note.body)
       {
           if(process.argv[3]=== "--title" || process.argv[3]==="-t")
               {
                    if(process.argv[5]=== "--body" || process.argv[5] === "-b")
                    {
                        let filterNote = notes.filter((note)=>note.title===title)
                        if(filterNote.length===0)
                        {
                            notes.push(note)
                            fs.writeFileSync("note.json",JSON.stringify(notes))
                            console.log("note added")
                            console.log(note)
                        } else {
                            console.log('title already used')
                        }
                    } else {
                        err()
                    }
                } else{
                    err()
                }
            } else{
               err()
            }
        
      
}

const removeNote = (title)=>
{
    let notes=fetchNote()
    let note={
        title
    }
    if(note.title)
    {
        
        if(process.argv[3]=== "--title" || process.argv[3]==="-t")
        {
            let checkNote = notes.filter((note)=>note.title==title)
            if(checkNote.length==0)
            {
                console.log('note not found')
            } else{
                let filterNote = notes.filter((note)=>note.title!==title)
                fs.writeFileSync("note.json",JSON.stringify(filterNote))
                console.log('note removed')
                
            }
        } else{
            err()
        }
    }else
    {
        err()
    }
        
} 
   

   

const readNote = (title)=>
{
    let notes=fetchNote()
    let note={
        title
    }
    if(note.title)
    {
        if(process.argv[3]=== "--title" || process.argv[3]==="-t")
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
        } else{
            err()
        }
    } else{
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