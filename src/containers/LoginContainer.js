import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const LoginContainer = ({users, setUser, setUsers}) => {



    return (  
        <>
        <div className="flex">
            <div className="w-[50%] bg-[url('https://source.unsplash.com/random')] bg-cover flex">
                <SignUpForm users={users} setUser={setUser} setUsers={setUsers}/>
            </div>
            <div className="w-[50%]">
                <LoginForm users={users} setUser={setUser}/>
            </div>
        </div>
            
        </>
    );
}
 
export default LoginContainer;