import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const LoginContainer = ({users, setUser, setUsers}) => {



    return (  
        <>
            <SignUpForm users={users} setUser={setUser} setUsers={setUsers}/>
            <LoginForm users={users} setUser={setUser}/>
        </>
    );
}
 
export default LoginContainer;