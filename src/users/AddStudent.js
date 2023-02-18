import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddStudent(){

    let navigate = useNavigate();

    const [student, setStudent] = useState({
        name:"",
        email:"",
        dob:"",
    });

    const {name,email,dob} = student;

    const onInputChange = (e) => {
       setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/poststudent", student);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center m-4">Register Students</h2>

                    <form onSubmit={(e) => onSubmit(e)}>

                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input type={"text"} className="form-control" placeholder="Enter your name"  name="name"
                               value={name} onChange={(e) => onInputChange(e)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">E-mail</label>
                        <input type={"text"} className="form-control" placeholder="Enter your email address"  name="email"
                               value={email} onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Dob</label>
                        <input type={"text"} className="form-control" placeholder="Enter your dob"  name="dob"
                               value={dob} onChange={(e)=>onInputChange(e)} />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Submit</button>

                    <Link type="submit" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>

                    </form>


                </div>
            </div>
        </div>
    );
}