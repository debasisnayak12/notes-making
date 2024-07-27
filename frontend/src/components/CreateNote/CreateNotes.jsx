import React, { useEffect, useState } from 'react'
import "./styles.css";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const CreateNotes = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const getUsername = localStorage.getItem("username");
        if(getUsername){
            setUsername(getUsername);
        }
    },[])

    const handleClick = () => {
        console.log("clickk...")
    }

  return (
    <div className='create-container'>
        <h1>Welcome {username}!</h1>
        <div className='create-btn'>Create Notes <AddBoxRoundedIcon sx={{cursor:"pointer"}} onClick={handleClick} />
        </div>
    </div>
  )
}

export default CreateNotes