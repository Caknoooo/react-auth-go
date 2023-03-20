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
      await fetch("https://fundraisingbackendrpl-production.up.railway.app/api/user/me", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      })
        .then((response) => response.json())
        .then((data) => {
          setNama(data.nama);
          console.log(data);
        })
        .catch((error) => console.error(error));
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
