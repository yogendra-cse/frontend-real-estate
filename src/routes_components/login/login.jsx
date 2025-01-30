import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";
function Login() {
  const [error,setError] = useState("")
  const [isLoading,setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setError("")
    setIsLoading(true)
    const formData =  new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password")
    console.log(username,password)
    try{
    const res =  await apiRequest.post("/auth/login",{
      username,password
    })
    /*
     * const res =  await axios.post("baseurl/auth/login",{
      username,password
    }) */

      // using local stoage in browser
      localStorage.setItem("user",JSON.stringify(res.data))
  
    navigate("/")
    console.log(res)
  }catch(err){
    
    console.log(err)
    if (err.response && err.response.data) {
      setError(err.response.data.message); 
    } else {
      setError("Something went wrong. Please try again.");
    }
    
  }finally{
    setIsLoading(false)
  }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back hi</h1>
          <input name="username" required minLength={3}  maxLength={20} type="text" placeholder="Username" />
          <input name="password" required  type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
