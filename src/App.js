import React, { useState,useEffect } from 'react';
import MainHeader from "./components/mainheader/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const  isLogIn= localStorage.getItem('isLoggedIn')
        if (isLogIn === '1'){
            setIsLoggedIn(true)
        }
    }, []);


    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo any ways
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
