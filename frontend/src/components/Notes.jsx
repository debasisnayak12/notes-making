import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Notes = () => {
    const [notes,setNotes] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios
        .get("http://localhost:8080/notes",{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          console.log(response.data);
          setNotes(response.data)
        })
        .catch((err) => console.log(err));
    },[])

  return (
    <div className='notes'>
        <h2 className="register-head">Notes...</h2>
        {
            notes && (
                notes.map((item,idx)=>(
                    <div className='user-notes'>
                    <div className='user-body' key={idx}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    </div>
                    <div className='btn'>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                    </div>
                ))
            )
        }
    </div>
  )
}

export default Notes