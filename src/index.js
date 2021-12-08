import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/bootstrap-grid.min.css";
import "./styles/index.sass";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recovery from "./pages/Recovery";
import Error404 from "./pages/404";
import { AuthProvider } from "./contexts/AuthContext";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<AuthenticatedRoute />}>
                        <Route path='/' element={<App />}>
                            <Route path='/' element={<Home />} />
                        </Route>
                    </Route>
                    <Route path='/' element={<UnauthenticatedRoute />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/recovery' element={<Recovery />} />
                        <Route path='*' element={<Error404 />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
