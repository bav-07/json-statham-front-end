import LoginForm from "../components/LoginForm";

const LoginContainer = ({setUser}) => {



    return (  
        <>
            <LoginForm setUser={setUser}/>
        </>
    );
}
 
export default LoginContainer;