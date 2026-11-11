import { useState } from "react";
export const useAuth = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");

  const handleLogin = async ()=>{

  }

   const handleSignup = async ()=>{
    
  }
    return{
email,setEmail,password,setPassword,confirmPassword,setConfirmPassword,handleLogin,handleSignup
    };
}