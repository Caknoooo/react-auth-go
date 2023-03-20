import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("");

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response: Response = await fetch(
  //         "https://fundraisingbackendrpl-production.up.railway.app/api/user/me",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         await response.json();
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  //   fetchPost();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className="form-signin">
          <Routes>
            <Route path="/" Component={() => <Home name={name} />} />
            <Route
              path="/login"
              Component={() => <Login setName={setName} />}
            />
            <Route path="/register" Component={Register} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
