import React from 'react'
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import "./styles.css";

const EmptyCard = () => {
  return (
    <div className='empty-card'>
        <div><AddCardRoundedIcon  sx={{ fontSize: "7rem" }}/></div>
        <p>Start creating your first Note!</p> 
        <p>Click the Add button to jot down your thoughts, ideas, and reminder.</p>
        <p>Lets get started!</p>
    </div>
  )
}

export default EmptyCard