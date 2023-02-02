import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const LoginContainer = ({users, setUser, setUsers}) => {



    return (  
        <>
        <div className="flex">
            {/* <div className="w-1/2">
                <SignUpForm users={users} setUser={setUser} setUsers={setUsers}/>
            </div> */}
            <div className="w-full">
                <LoginForm users={users} setUser={setUser}/>
            </div>
        </div>
            
        </>
    );
}
 
export default LoginContainer;