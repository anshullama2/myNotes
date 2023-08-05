import React, { useState } from 'react'
import initData from '../Components/initData';
import { push, ref } from 'firebase/database';
import { database } from '../Components/firebase';



function UserRegis() {

  const [regis, setReg] = useState(initData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReg({ ...regis, [name]: value });
    console.log("Regis---", regis.password);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (regis.password === regis.cpassword) {
      
      const keys = Object.keys(regis);
      const lastKey = keys[keys.length - 1];
      delete regis[lastKey];

      let tableName = "regis_table";
      push(ref(database, `${tableName}`), regis)
        .then(() => {
          alert("Data Inserted ");
        }).catch((e) => {
          alert("Data Not Inserted");
        })
    }
    else{
      alert("Password Not Same");
    }

  }



  return (
    <div className='container d-flex align-items-center' style={{ height: "70vh" }}>
      <form className='container border border-info rounded col-sm-6 px-5 py-3' onSubmit={handleSubmit}>
        <h1 className='container text-center text-primary mb-5'>User Registration</h1>
        <div className="container my-3 col-sm-10">
          <input className='form-control' name='uname' type="text" placeholder='Enter name' onChange={handleChange} />
        </div>
        <div className="container my-3 col-sm-10">
          <input className='form-control' name='email' type="email" placeholder='Enter email' onChange={handleChange} />
        </div>
        <div className="container my-3 col-sm-10">
          <input className='form-control' name='contact' type="number" placeholder='Enter Phone no.' onChange={handleChange} />
        </div>
        <div className="container my-3 col-sm-10">
          <input className='form-control' name='password' type="password" placeholder='Enter password' onChange={handleChange} />
        </div>
        <div className="container my-3 col-sm-10">
          <input className='form-control' name='cpassword' type="password" placeholder='Confirm password' onChange={handleChange} />
        </div>
        <div className="container text-center my-4 mt-5 ">
          <button className='btn btn-primary'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default UserRegis;