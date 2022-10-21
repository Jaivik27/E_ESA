import React,{useState} from "react";
import { Link } from "react-router-dom";

const SIGN=()=>{
    const[value,setvalue]=useState({
     fullname:"",
     email:"",
     password:""})

    const handlechange=(e)=>{
        setvalue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit=(e)=>{
      e.preventDefault();
    }
    return(
        <div>
          <h2>CREATE A NEW ACCOUNT </h2>
          <Link to="/">home</Link> 
          <form>
            <div className="name">
            <label> Full name</label>
            <input type="text" 
            name="fullname" 
            value={value.fullname} 
            onChange={handlechange}
            ></input>
          </div>

          <div className="email">
            <label>EMAIL</label>
            <input type="text"
            name="email" 
            value={value.email}
            onChange={handlechange}
            ></input>
          </div>

          <div className="password">
            <label>Password</label>
            <input type="text" 
            name="password" 
            value={value.password}
            onChange={handlechange}
            ></input>
          </div>

          <button onSubmit={handlesubmit}>Sign up</button>
          </form>
        </div>
    );
}

export default SIGN;