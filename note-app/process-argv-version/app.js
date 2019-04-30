console.log('starting app');
const notes = require('./note.js')
let title = process.argv[4]
let body = process.argv[6]
let command = process.argv[2]
if(command=="add")
    {
       
        notes.addNote(title,body)
        
    } else if (command =="remove")
        {
            
            notes.removeNote(title)
            
        } else if (command=="read")
            {
                
                notes.readNote(title)

            } else if (command=="list")
                {
                    
                    notes.getAllNotes()

                }else
                {
                    console.log('unknown command')
                }
