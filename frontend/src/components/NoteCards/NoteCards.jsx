import React from 'react';
import "./styles.css";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const NoteCards = ({title,date,content,onEdit,onDelete}) => {
  return (
    <div className='note-card'>
        <div className='note-desc'>
            <h4>{title}</h4>
            <span>{date}</span>
        </div>
        <div className='note-body'>
            <p>{content?.slice(0,1000)}</p>
        </div>
        <div className='note-func'>
        <EditRoundedIcon onClick={onEdit} className="edit" />
        <DeleteRoundedIcon onClick={onDelete} className="delete" />
        </div>
    </div>
  )
}

export default NoteCards