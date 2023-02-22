import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const LoginContainer = ({users, setUser, setUsers}) => {



    return (  
        <>
        <div className="flex flex-row max-sm:flex-col">
            <div className="md:w-[50%] max-sm:h-screen w-[100%] bg-[url('https://source.unsplash.com/random')] bg-cover flex">
                <SignUpForm users={users} setUser={setUser} setUsers={setUsers}/>
            </div>
            <div className="md:w-[50%]  w-[100%]">
                <LoginForm users={users} setUser={setUser}/>
            </div>
        </div>
            
        </>
    );
}
 
export default LoginContainer;