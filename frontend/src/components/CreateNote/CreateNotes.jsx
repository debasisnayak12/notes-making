import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import NoteCards from "../NoteCards/NoteCards";
import AddEditNotes from "../AddEditNotes/AddEditNotes";
import moment from "moment";
import { Modal } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateNotes = () => {
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState({ isShow: false, type: "add", data: null });
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // const navigate = useNavigate();

  const getAllNotes = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://notes-making.onrender.com/notes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setNotes(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
    getAllNotes();
  }, []);

  const handleEdit = (noteDetails) => {
    setOpen({isShow:true,type:"edit",data:noteDetails})
  }

  const handleDelete = (noteData) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`https://notes-making.onrender.com/notes/delete/${noteData._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setNotes(notes.filter(note => note._id !== noteData._id));
        toast.success("Notes Deleted Successfull!")
      })
      .catch((error)=>{
        console.log(error);
        toast.error("Failed to Delete Notes!")
        setError("Failed to Delete Note.")
      })
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  }

  const handleOpen = () => setOpen({ isShow: true, type: "add", data: null });
  const handleClose = () => setOpen({ isShow: false, type: "add", data: null });
  

  return (
    <div className="create-container">
      <div className="create-nav">
        <h3>
          Welcome, <span>{username}</span>
        </h3>
        <div className="search-area">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <button onClick={handleLogout}>
          Logout
          <LogoutRoundedIcon />
        </button>
      </div>
      <div className="notes-cards">
        {notes &&
          notes.map((item, index) => (
            <NoteCards
            key={item._id}
              title={item.title}
              date={moment(item.creationDateTime).format("Do MMM YYYY")}
              content={item.body}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item)}
            />
          ))}
      </div>

      <div className="add-note">
        <AddBoxRoundedIcon sx={{ fontSize: "3rem" }} onClick={handleOpen} />
      </div>

      <Modal open={open.isShow}>
        <div className="add-modal">
          <AddEditNotes
            type={open.type}
            noteData={open.data}
            onClose={handleClose}
            setNotes={setNotes}
          />
        </div>
      </Modal>
    </div>
  );
};
 
export default CreateNotes;
