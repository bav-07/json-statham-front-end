import LoginForm from "../components/LoginForm";

const LoginContainer = ({users, setUser}) => {



    return (  
        <>
            <LoginForm users={users} setUser={setUser}/>
        </>
    );
}
 
export default LoginContainer;