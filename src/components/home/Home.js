import React, {useContext} from 'react';

import classes from './Home.module.css';
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";
import AuthContext from "../../store/AuthContext";

const Home = (props) => {
    const authContext = useContext(AuthContext);

    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={authContext.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;
