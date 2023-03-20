import React, { SyntheticEvent, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [nama, setNama] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await fetch("https://fundraisingbackendrpl-production.up.railway.app/api/user", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          no_telp,
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      alert('success');
      navigate('/login');
    } catch (error) {
      alert(error);
    } 
  };

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

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

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
