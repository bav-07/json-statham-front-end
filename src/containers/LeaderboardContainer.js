import { useState, useEffect } from "react";
import UserList from "../components/UserList";


const LeaderboardContainer = ({users, darkMode}) => {
    
    

    return (  
        <>
            <UserList users={users} darkMode={darkMode}/>
        </>
    );
}
 
export default LeaderboardContainer;