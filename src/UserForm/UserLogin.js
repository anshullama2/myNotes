import { onValue, ref } from 'firebase/database';
import React, { useState } from 'react'
import { database } from '../Components/firebase';




function UserLogin() {

  const [userdata, setUserdata] = useState({email:"",password:""});
  const [user, setUser] = useState({});

  const handleChange=(e)=>{
      const { name, value } = e.target;
      setUserdata({ ...userdata, [name]: value });
      console.log("user data --- ",userdata);
  }



  const handleSubmit=(e)=>{
      e.preventDefault();
      // alert("hello")


        onValue(ref(database, `regis_table`),(snapshot)=>{  

            if(snapshot.val()!=null){
              setUser({...snapshot.val()});
              // eslint-disable-next-line 
              Object.keys(user).map((id)=>{
                if(user[id].email === userdata.email && user[id].password === userdata.password){
                  alert("Your are Login");


                }
                else{
                  console.log("not match");
                }
              })
            }
          
          else{
              setUser({});
            }
        })
        
  }






  return (
    <div className='container d-flex align-items-center' style={{ height: "70vh" }}>
      <form className='container border border-info rounded col-sm-4 py-3' onSubmit={handleSubmit}>
        <h1 className='container text-center text-primary mb-5'>User Login</h1>
        <div className="container my-3 col-sm-10">
          <input className='form-control' name='email' type="email" placeholder='Enter email' onChange={handleChange} />
        </div>
        <div className="container my-3 mb-5 col-sm-10">
          <input className='form-control' name='password' type="password" placeholder='Enter Password' onChange={handleChange} />
        </div>
        <div className="container text-center my-4">
          <button className='btn btn-primary' >Log in</button>
        </div>
      </form>
    </div>
  )
}

export default UserLogin