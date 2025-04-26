import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'

const Auth = () => {

  const googleResponse = async(authResult)=>{
    try {
      if(authResult['code']){
        console.log(authResult.code)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const googleAuth = useGoogleLogin({
    onSuccess:googleResponse,
    onError:googleResponse,
    flow:'auth-code'
  })
  return (
    <div>
      <button 
      onClick={googleAuth}
      className='border-2 border-black p-3 rounded'>
        Continue with google
      </button>
    </div>
  )
}

export default Auth
