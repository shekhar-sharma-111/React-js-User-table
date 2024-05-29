import React, { useState } from 'react'
import './AddUser.css'
function AddUser() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [salary,setsalary]=useState('')
    const [data,setdata]=useState([])
    
    function submit(e){
         e.preventDefault();
        if(name&&email&&salary)
       { setdata({'name':name ,'email':email ,'salary':salary})
       
       document.querySelector('#user-table').innerHTML+=`<tr><td>${name}</td><td>${email}</td><td>${salary}</td></tr>`
       }
    }
  return (<> <div>
    <form>
       <div> <label for="name" >name:</label>
        <input type='text' name='name' placeholder="full name" required='true' onChange={(e)=>{
        setname(e.target.value)
    }}></input></div>
        <div> <label for='email' >email:</label>
        <input type='email'name="email" placeholder="email" required onChange={(e)=>{
        setemail(e.target.value)
    }}></input></div>
        <div> <label for="salary" >salary:</label>
        <input type='munber' name='salary' placeholder='salary' required onChange={(e)=>{
        setsalary(e.target.value)
    }}></input></div>
        <button type='submit' onClick={submit}>Add User</button>
    </form>
   </div>
   <div>
   {
    data!=null && <table id='user-table'>
        <tr><th>name</th>
        <th>email</th>
        <th>salary</th></tr>
    </table>
   }
   </div>
   </>
  
  )
}

export default AddUser