import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import {userAuthHook} from "../../hooks/auth.hook.js"
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const navigate = useNavigate();

  const {authError, authLoading, userAuthFunc} = userAuthHook();
  const googleResponse = async(authResult)=>{
    try {
      if(authResult['code']){
        const response = await userAuthFunc(authResult.code);
        if(response === "success") navigate('/')
      }
    } catch (error) {
      
    }
  }
  const googleAuth = useGoogleLogin({
    onSuccess:googleResponse,
    onError:googleResponse,
    flow:'auth-code'
  });

  return (
   <div>
    <button
    onClick={googleAuth}
    >Continue with google</button>
   </div>
  )
}

export default Auth


