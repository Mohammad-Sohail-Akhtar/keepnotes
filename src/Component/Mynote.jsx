import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const Mynote = (props) => {
    // const [delNote, setDelNote] = useState()
    const deleteNote = (id) =>{
            props.onSelect(props.id)
    }
  return (
    <>
    <div className='flex'>
    <div className='note-added'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
    <button onClick={deleteNote} className='btn-2'><MdDeleteOutline /></button>
    </div>
    </>
  )
}

export default Mynote;
