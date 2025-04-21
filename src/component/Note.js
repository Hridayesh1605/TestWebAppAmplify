import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../index.css'

const Note = (props) => {

    const deleteNote = () => {
        props.onDel(props.id);
    }
  return (
    <>
    <div className='cont'>
    <div className='note'>
        <h2>{props.val.title}</h2>
        <p>{props.val.content}</p>
        <button className='delete' onClick={deleteNote}><DeleteIcon fontSize='small'/></button>
    </div>
    </div>
      
    </>
  )
}

export default Note
