import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';

// create different pages for home, login, register

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={ <Home /> } />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
