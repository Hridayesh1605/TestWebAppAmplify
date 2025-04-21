import React, { useState } from 'react'
import Header from './component/Header'
import CreateNote from './component/CreateNote'
import Note from './component/Note'

const App = () => {

  const [addItem,setaddItem] = useState([]);

  const add=(note)=>{
    
    setaddItem((old)=>{
      return [
        ...old,note
      ]

    })
  }

  const deleteItem = (id) => {
    setaddItem((old)=>{
      return old.filter((arr,index)=>{
        return index!==id;
      })

    })
    

  }
  return (
    <>
    <Header/>
    <CreateNote onS={add}/>
    {
      addItem.map((val,index)=>{
        return <Note val={val} key={index} id={index} onDel={deleteItem}/>
      })
    }

      
    </>
  )
}

export default App

