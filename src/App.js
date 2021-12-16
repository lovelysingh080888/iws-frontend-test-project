import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import {useState} from "react";
function App() {
  let [token, setToken] = useState("dfgdfg");
  if(!token)
   return <Login token={token} />;
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
