import React, { useEffect, useState } from "react";
import "./styles.css";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { toast } from "react-toastify";

const AddEditNotes = ({onClose, noteData, type, setNotes}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.body || "");
  const [error, setError] = useState("");
 
  
  const addNewNote = () => {
    const token = localStorage.getItem("token");
    axios
      .post("https://notes-making.onrender.com/notes/create",{
        title,
        body:content
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setNotes((prevNotes) => [...prevNotes,response.data]);
        toast.success("New Notes Added!")
        onClose();
      })
      .catch((error)=>{
        console.log(error);
        toast.error("Failed to Add Notes!")
        setError("Failed to Add Note.")
      })
      
  }

  const editNote = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(`https://notes-making.onrender.com/notes/update/${noteData._id}`,{
        title,
        body:content,
        userID: localStorage.getItem("userID")
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setNotes((prevNotes) => prevNotes.map((note) => 
          note._id === noteData._id ? {...note, title, body:content} : note
        ))
        toast.success("Update the Notes!")
        onClose();
      })
      .catch((error)=>{
        console.log(error);
        toast.error("Failed to Update Notes!")
        setError("Failed to Update Note.")
      })
  }

  const handleAddEdit = () => {
    if (!title) {
      setError("Please enter the Title");
      return;
    }
    if (!content) {
      setError("Please enter the Content");
      return;
    }

    setError("");

    if(type === "edit"){
        editNote();
    }else{
        addNewNote();
    }

  };
  


  return (
      <div className="add-edit-notes">
    <div className="close-btn"><CloseIcon onClick={onClose}/></div>
        <div className="add-edit-title">
          <label className="input-label">TITLE</label>
          <input
            type="text"
            placeholder="Go to GYM at 5AM"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="add-edit-body">
          <label className="input-label">CONTENT</label>
          <textarea
            type="text"
            placeholder="Write your notes..."
            rows={10}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleAddEdit}>{type === "edit" ? "UPDATE" : "ADD"}</button>
      </div>
  );
};

export default AddEditNotes;
