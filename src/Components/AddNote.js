import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import { database } from './firebase';
import { useNavigate } from 'react-router-dom';



function AddNote(props) {

    const navigate = useNavigate();
    const [note, setNote] = useState({title:"",message:""});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setNote({...note,[name]:value});
        console.log("note =========== ",note);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        push(ref(database,`notes`),note)
        .then(()=>{
            alert("Your Note Inserted");
            navigate('/');   

        }).catch(()=>{
            alert("Your Note NOT Inserted");
        })
    }

    



    return (
        <>
            <div className="container mt-5" >
                <form className={`container border rounded border-${props.mode==="dark"?"light":"dark"} pe-5 p-3`} onSubmit={handleSubmit}>
                    <h1 className={`text-center mb-3 text-${props.mode==="dark"?"light":"dark"}`}>WRITE YOUR NOTE</h1>
                    <div className="container m-3">
                        <input type="text" className='form-control' name='title' placeholder='Title' onChange={handleChange}/>
                    </div>
                    <div className="container text-center m-3">
                        <textarea className="form-control" name='message' rows="12" placeholder="Leave your note here" id="floatingTextarea2" onChange={handleChange} ></textarea>
                    </div>
                    <div className="container text-center m-3">
                        <button className='btn btn-success'>Add Note</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AddNote