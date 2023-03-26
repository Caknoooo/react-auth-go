import React, { SyntheticEvent, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [nama, setNama] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          no_telp,
          email,
          password,
          confirm_password,
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        localStorage.setItem("token", responseData.message)
        console.log(nama, no_telp, email, password, confirm_password)
        alert('success');
        navigate('/login');
      }
      else {
        alert(responseData.error)
      }
    } catch (error) {
      console.log(error)
    } 
  };

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-4 fw-normal">Please register</h1>

      <input
        className="form-control"
        placeholder="Name"
        required
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        className="form-control"
        placeholder="No Telepon"
        required
        onChange={(e) => setNo_telp(e.target.value)}
      />

      <input
        type="email"
        className="form-control"
        placeholder="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Confirm Password"
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
