import { useState, useEffect } from "react";
import UserList from "../components/UserList";


const LeaderboardContainer = () => {
    
    const [users, setUsers] = useState([])

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ("http://localhost:8080/users");
            const data = await response.json();
            setUsers(data)
        }
        fetchData()
    }, [])

    return (  
        <>
            <UserList users={users}/>
        </>
    );
}
 
export default LeaderboardContainer;