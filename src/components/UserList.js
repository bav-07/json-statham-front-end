import { useState } from "react";
import UserCard from "./UserCard";

const UserList = ({users}) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    // Not sure if this updates with state, check back later
    const userComponents = users.sort((user1, user2) => user2.runTimeTerrorCrypto - user1.runTimeTerrorCrypto
    ).filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).map(user => {
        return <UserCard user={user} key={user.id}/>
    })

    return (  
        <>
            <form className="userForm">
                <input className="userSearchBar"
                    onChange={handleChange}
                    value={searchTerm}
                    placeholder="Search by user name..."
                ></input>
            </form>
            {userComponents}
        </>
    );
}
 
export default UserList;