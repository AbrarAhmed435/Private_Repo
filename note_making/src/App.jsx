import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [notes,setNotes]=useState([]);
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [mycolor,setMyColor]=useState("#45A4");
  const handlSubmit=(e)=>{
    e.preventDefault()
    if(!title || !content ) return ;
    var id=notes.length+1;
    const newNote={id:Date.now(),title,content};
    setNotes([...notes,newNote]);
    setTitle("");
    setContent("");
    console.log("Hello");

  }
  const handleDelete=(id)=>{
    setNotes(notes.filter(note=>note.id!==id));

  }

  const generateBackground=()=>{
    const alpha=['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];

    let temp="#";

    for(let i=0;i<6;i++){
      let num=Math.floor(Math.random()*15)
      temp+=alpha[num];
    }
    setMyColor(temp);
  }

  return (
    <div style={{background:mycolor}}>
      <button onClick={generateBackground}>Change</button>
      {notes.map((note)=>(
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={()=>handleDelete(note.id)}>🗑️</button>
        </div>
      ))}
      <form onSubmit={handlSubmit}>
        <label id="title">Title</label>
        <input type="text"
        id="title" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <br/>
        <br/>
        <label id="content">Content</label>
        <textarea 
        value={content}
        id="content"
        onChange={(e)=>setContent(e.target.value)}
        ></textarea><br/><br/>
        <button>Add</button>
      </form>
      <p>{title}</p>
    </div>
  )
}

export default App
