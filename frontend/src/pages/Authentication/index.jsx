import "./style.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm";
import SignupForm from "../../components/signupForm";

const Authentication = () => {
const [isLogin,setIsLogin] = useState(true);
const navigate = useNavigate(); 
const [user, setUser] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [email, setEmail] = useState("");
const [passwordConfirm, setPasswordConfirm] = useState("");
const [type, setType] = useState("user");

useEffect(() => {   
    if(!email.includes("@") && email.length > 0){
        setError("Invalid email");
    } else if(password.length < 8 && password.length > 0){
        setError("Password must be at least 8 characters long");
    }
}, [email, password]);



const login = async () => {
    try {
        const loginForm = new FormData();
        loginForm.append("user", user);
        loginForm.append("password", password);
        const response = await axios.post("http://localhost:81/Linkdin%20clone/linkedin_clone/backend/login.php", {
            loginForm
        });
        console.log(response.data); 
        if(response.data['status'] === "success")
        navigate("/");
    else{
        setError(response.data['status']);
    }
    } catch (error) {
        console.error(error);
    }
}

const signup = async () => {
    try {
        const signupForm = new FormData();
        signupForm.append("username", username);
        signupForm.append("email", email);
        signupForm.append("password", password);
        signupForm.append("type", type);
        const response = await axios.post("http://localhost:81/Linkdin%20clone/linkedin_clone/backend/signup.php", {
         signupForm
        });
        console.log(response.data); 
        if(response.data['status'] === "success")
        navigate("/");
    else{
        setError(response.data['status']);
    }
    } catch (error) {
        console.error(error);
    }
}

const User = (e) => {
    setUser(e.target.value);
}

const Password = (e) => {
    setPassword(e.target.value);
}   


const Username = (e) => {
    setUsername(e.target.value);
}

const Email = (e) => {
    setEmail(e.target.value);
}



const checkMatch = () => {
    setPasswordConfirm(e.target.value);
    if (password !== passwordConfirm) {
        setError("Passwords do not match");
    } else {
        setError("");
    }
}

const Type = (e) => {
    setType(e.target.value);
}

return (

<div>
    <div>
        <div>
            {isLogin? 
       ( <LoginForm
            switchHandler={setIsLogin('false')}
            goHome={login}
            user={User}
            password={Password}
            error={error}
        />)
        :
        (<SignupForm
            switchHandler={setIsLogin('true')}
            singupButton={signup}
            username={Username}
            email={Email}
            password={Password}
            checkMatch={checkMatch}
            error={error}
            type={Type}
        />)
        }
        </div>
    </div>
</div>






)

}

export default Authentication;