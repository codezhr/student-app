import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function ViewStudent() {

    const [student, setStudent] = useState({
        name :"",
        email: "",
        dob: "",
    });

    const {id} = useParams();

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8080/student/${id}`);
        setStudent(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">

                    <h2 className="text-center m-4">Student Details</h2>

                    <div className="card">

                        <div className="card-header">
                            Detail of student id : {student.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name : </b>
                                    {student.name}
                                </li>

                                <li className="list-group-item">
                                   <b>E-mail : </b>
                                    {student.email}
                                </li>

                                <li className="list-group-item">
                                   <b>Dob : </b>
                                    {student.dob}
                                </li>
                            </ul>
                        </div>

                    </div>

                    <Link className="btn btn-primary mt-2" to={"/"}>Back to Home</Link>

                </div>
            </div>
        </div>
    );
}