// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/style/style.css"
import Header from './Component/Header';
import Note from './Component/Note';
import Mynote from './Component/Mynote';
import Footer from './Component/Footer';

function App() {
  const [myNote, myUpdatedNote] = useState([]);

  const addedNoteHere = (note) =>{
    myUpdatedNote((old)=>{
      return[
        ...old,note
      ]
    });
  };

  const deleteNote = (id) => {
      myUpdatedNote((preVal) =>{
        return preVal.filter((arrElem,idx) =>{
          return id !== idx;
        })
      })
  }
  return (
    <>
      <Header/>
      <Note
        passNote = {addedNoteHere}
      />
     
      {myNote.map((val,index)=>{
        return  <Mynote
          key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
        
          onSelect = {deleteNote}
        />
      })}
      <Footer/>
    </>
  );
}

export default App;
