import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [nama, setNama] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8888/api/user/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + window.localStorage.getItem('token'),
        },
      });
      const responseData = await response.json()
      if (response.ok) {
        setNama(responseData.data.nama)
        console.log("tes")
      }
    })();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav nama={nama} setName={setNama} />

        <main className="form-signin">
          <Routes>
            <Route path="/" Component={() => <Home nama={nama} />} />
            <Route
              path="/login"
              Component={() => <Login setName={setNama} />}
            />
            <Route path="/register" Component={Register} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
