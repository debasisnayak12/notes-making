import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const CreateNotes = () => {
  const [username, setUsername] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState("");

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);
 
  

  return (
    <div className="create-container">
      

    </div>
  );
};

export default CreateNotes;
