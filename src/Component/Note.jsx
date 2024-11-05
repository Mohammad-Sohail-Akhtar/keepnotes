import React, { useState } from 'react'

const Note = (props) => {

  const [show, updateShow] = useState(false)
    const [note,updateNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) =>{
        const {name,value} = event.target
        updateNote((old) =>{
            return{
                ...old,
                [name] : value,
            }
        });
       
    };

    const addEvent = (event) => {
      event.preventDefault();
          props.passNote(note);
  updateNote({
    title: "",
        content: "",
  })
    };
    const openEvent = () => {
      updateShow(true);
    }

    const expandNote = () => {
      updateShow(false);
    }
   
  return (
    <>
    <div className='card'>
      <form onDoubleClick={expandNote}>
   { show ?
      <input
          type='text'
          placeholder='Title'
          name='title'
          value={note.title}
          onChange={inputEvent}
      />:null}
      <textarea
          placeholder='Add a Note...'
          name='content'
          value={note.content}
          onChange={inputEvent}
          onClick={openEvent}
      />
      {show ? 
        <button onClick={addEvent} className='btn-1'><i class="bi bi-plus"></i></button>:null}
      </form>
    </div>
    </>
  )
}

export default Note
