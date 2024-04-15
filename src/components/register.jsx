import Form from 'react-bootstrap/Form';
import "./style/login.css";
import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(res => {
        console.log(res)
        navigate('/login')
      })
      .then(err => console.log(err))
  }
  return (
    <>

      <div className="formContainer">
        <Form onSubmit={handleSubmit}>
          <h5>Tizimdan ro'yxatdan o'tish</h5>
          <div className="formGroup">
            <label htmlFor="text">Ismingiz</label>
            <input type="text" name="text" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email manzil</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Parol kiriting</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Kirish</button>
          <Link to={"/login"}>Tizimga kirish</Link>
        </Form>
      </div>
    </>
  );
}

export default Register;