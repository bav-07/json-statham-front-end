import { useState, useEffect } from "react";


const LeaderboardContainer = () => {
    
    const [users, setUsers] = useState([])

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ("https://localhost:8080/users");
            const data = await response.json();
            setUsers(data)
        }
        fetchData()
    }, [])

    return (  
        <>
        </>
    );
}
 
export default LeaderboardContainer;