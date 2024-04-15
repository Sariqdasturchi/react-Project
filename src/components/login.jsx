import React from "react";
import "./style/login.css";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(res => {
                console.log(res)
                if (res.data == "Success") {
                    navigate('/sign')
                }
            })
            .then(err => console.log(err))
    }

    return (
        <>
            <div className="formContainer">
                <Form onSubmit={handleSubmit}>
                    <h3>Tizimga kirish</h3>
                    <div className="formGroup">
                        <label htmlFor="email">Email manzil</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Parol kiriting</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Kirish</button>
                    <Link to={"/register"}>Tizimdan ro'yxatdan o'tish</Link>
                </Form>
            </div>
        </>
    )
}

export default Login