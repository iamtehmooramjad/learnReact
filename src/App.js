import React, {useContext} from 'react';
import MainHeader from "./components/mainheader/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import AuthContext from "./store/AuthContext";


function App() {

    const ctx = useContext(AuthContext);
    return (
        <React.Fragment>
            <MainHeader/>
            <main>
                {!ctx.isLoggedIn && <Login/>}
                {ctx.isLoggedIn && <Home/>}
            </main>
        </React.Fragment>

    );
}

export default App;
