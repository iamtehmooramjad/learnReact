import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";
import {useState} from "react";


const App = () => {
    const [usersList, setUsersList] = useState([])

    const AddUserHandler = (uName, uAge) => {
        setUsersList(prevState => {
            return [...prevState, {name: uName, age: uAge, id:Math.random().toString()}];
        })
    }

    return (
        <div className="App">
            <AddUser onAddUser={AddUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
