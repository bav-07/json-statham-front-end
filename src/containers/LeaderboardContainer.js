import { useState, useEffect } from "react";
import UserList from "../components/UserList";


const LeaderboardContainer = ({users}) => {
    
    

    return (  
        <>
            <UserList users={users}/>
        </>
    );
}
 
export default LeaderboardContainer;