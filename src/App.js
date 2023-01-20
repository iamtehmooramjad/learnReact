import {Fragment} from "react";
import Header from "./component/layout/Header";
import Meals from "./component/meals/Meals";


function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
