import "./style.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
const [isLogin,setIsLogin] = useState(true);
const navigate = useNavigate(); 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const login = async () => {
    try {
        const response = await axios.post("http://localhost:81/Linkdin%20clone/linkedin_clone/backend/login.php", {
            email,
            password,
        });
        console.log(response.data); 
        navigate("/");
    } catch (error) {
        console.error(error);
        setError("Invalid credentials");
    }

}


return (

<div>
    <div>
        <div>
            {is}
        </div>
    </div>
</div>






)

}

export default Authentication;