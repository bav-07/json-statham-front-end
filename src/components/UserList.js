import { useState } from "react";
import UserCard from "./UserCard";

const UserList = ({users, darkMode}) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    // Not sure if this updates with state, check back later
    const userComponents = users.sort((user1, user2) => user2.runTimeTerrorCrypto - user1.runTimeTerrorCrypto
    ).filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).map(user => {
        return <UserCard user={user} key={user.id} darkMode={darkMode}/>
    })

    return (  
        <div className="mt-[120px]">
            <form className="userForm flex w-screen grid flex-col justify-items-center w-screen h-[10vh]">
                <input className="userSearchBar searchBar m-auto min-w-[300px] p-5 rounded-full w-[50vw] drop-shadow-lg font-['Inter'] font-light"
                    onChange={handleChange}
                    value={searchTerm}
                    placeholder="Search by user name..."
                ></input>
            </form>
            <div className="w-[50vw] min-w-[300px] m-auto mt-[20px] mb-[100px]">
                {userComponents}
            </div>
            
        </div>
    );
}
 
export default UserList;