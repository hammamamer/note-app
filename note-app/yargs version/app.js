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

console.log('starting app');
const notes = require('./note.js')
var argv = require('yargs')
    .alias('t', 'title')
    .alias('b','body')
    .argv;

let command = argv._[0];
let title =argv.title
let body = argv.body
if(command=="add")
    {
       if(title && body)
       {
        notes.addNote(title,body)
       } else{
            err()
       } 

    } else if (command =="remove"){
            if(title)
            {
                notes.removeNote(title)
            } else{ 
              err()
            }
            
        } else if (command=="read")
           {
               if(title)
               {
                  notes.readNote(title)
               } else{

                   err()
               }
                
            } else if (command=="list")
                {  
                    notes.getAllNotes()
                } else{
                    console.log('unknown command')
                }

