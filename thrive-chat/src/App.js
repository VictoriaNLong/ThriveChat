import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import './App.css';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// create different pages for home, login, register

function App() {

    const {user} = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={ user ? <Home /> : <Register /> } />
                    <Route path='/login' element={user ? <Navigate to="/"/> : <Login />} />
                    <Route path='/register' element={user ? <Navigate to="/"/> : <Register />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
