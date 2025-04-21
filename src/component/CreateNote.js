import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../index.css'


const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [show,setshow] = useState(false)


    const inputNote = (e) => {
        const { value, name } = e.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
            }


        })
        console.log(note);
    }

    const addNotes = () => {
        props.onS(note);

        setNote({
            title: "",
            content: ""
        })
    }
    function submit(event){
        event.preventDefault();
        
    
    
      }

      const expand = () => {
        setshow(true);
      }

      const exp = () => {
        setshow(false);
      }
    return (
        <>

            <div className='main-note' onDoubleClick={exp}>
                <form onSubmit={submit}>

                {show?
                    <input placeholder='Title' name='title' value={note.title} onChange={inputNote} />:null}
                    
                    
                    <textarea rows="" column="" placeholder='Enter details' name='content' value={note.content} onChange={inputNote} onClick={expand}/>

                    {show?
                    <button type="submit" className='add-icon' onClick={addNotes}><AddIcon fontSize='large' /></button>:null}
                </form>
            </div>


        </>
    )
}

export default CreateNote
