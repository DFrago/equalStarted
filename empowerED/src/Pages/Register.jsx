import PocketBase from 'pocketbase'
import {useNavigate,A} from "@solidjs/router"
import { createSignal,Show} from 'solid-js'
const [validEmail,setValidEmail]=createSignal(false)
const [validatedEmail,setValidatedEmail]=createSignal('')

const EmailComponent=(props)=>{
  const [registerError,setRegisterError]=createSignal(false)
  const [email,setEmail]=createSignal("")

  const handleSubmit=async(e)=>{
    setRegisterError(false)
    e.preventDefault()
    try{
      let emailToVerify=await props.pb.collection('users').requestVerification(`${email()}`)//Need to setup SMTP server, currently only return if the email is valid or not
      setRegisterError(false)
      setValidEmail(true)
      setValidatedEmail(email())
    }
    catch(e){
      console.error(e.message) 
      setRegisterError(true)
    }
 }

  return(
    <div class="20 bg-gray-50 w-1/3 self-center h-3/5 my-10 rounded-md shadow-xl flex flex-col items-center">
      <h1 class="my-8 antialiased text-4xl">Register</h1>
      <Show
        when={registerError()}  
        fallback={<h1 class='text-lg'>&nbsp</h1>}
      >
      <h1 class="antialiased text-lg text-rose-600">Please enter a valid Email</h1>
      </Show>
        <form class="w-full flex flex-col items-center">
          <input 
            value={email()}
            onChange={(e)=>{
              setEmail(e.currentTarget.value)
            }}
            name="email" type="text" placeholder="Email"
          class="h-10 w-1/2 mt-2 bg-gray-50 border-2 rounded-md border-gray-300 text-center"/>
          <button onClick={(e)=>handleSubmit(e)}class="bg-sky-500 my-10 w-1/3 h-10 rounded-full text-gray-50 mt-20">Continue</button>
        </form>
    </div>
  )
}

const CredentialComponent=(props)=>{
  const [userName,setUserName]=createSignal("")
  const [password,setPassword]=createSignal("")
  const [confirmPassword,setConfirmPassword]=createSignal("")
  const [errorMessage,setErrorMessage]=createSignal("")
  const [confirmationMessage,setConfirmationMessage]=createSignal("")
  const navigate=useNavigate()
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (userName().length <= 0 || (password().length < 8)||password().length > 72){
      setErrorMessage("Password must contain at least 8 characters")
    }
    else if (!(password()==confirmPassword())){
      setErrorMessage("Passwords do not match")
    }
    else{
      try{
        const data={
          "username":`${userName()}`,
          "email":`${validatedEmail()}`,
          "emailVisibility":true,
          "password":`${password()}`,
          "passwordConfirm":`${confirmPassword()}`,
          "name":`${userName()}`,
        }
        console.log(data)
        const user = await props.pb.collection('users').create(data);
        setErrorMessage('')
        setConfirmationMessage("Account Successfully Created")
        setTimeout(()=>navigate('/'),1000)
      }catch(e){
        console.error(e.message)
        setErrorMessage("An error has occured")
      }  
    }
  }

  return(
    <div class="20 bg-gray-50 w-1/3 self-center h-3/5 my-10 rounded-md shadow-xl flex flex-col items-center">
      <h1 class="mt-4 antialiased text-4xl">Register</h1>
      <Show
        when={errorMessage().length >1}  
        fallback={<h1 class='text-lg'>&nbsp</h1>}
      >
      <h1 class="antialiased text-lg text-rose-600">{errorMessage()}</h1>
      </Show>
      <Show
        when={confirmationMessage().length >1}  
      >
      <h1 class="antialiased text-lg text-green-600">{confirmationMessage()}</h1>
      <h1 class="antialiased text-lg text-green-600">Returning to Login...</h1>
      </Show>
      <form class="flex flex-col items-center w-full">
          <input 
            value={userName()}
            onChange={(e)=>{
              setUserName(e.currentTarget.value)
            }}
            name="username" type="text" placeholder="Username"
          class="my-3 h-10 w-1/2 mt-2 bg-gray-50 border-2 rounded-md border-gray-300 text-center"/>
          <input 
            value={password()}
            onChange={(e)=>{
              setPassword(e.currentTarget.value)
            }}
            name="password" type="password" placeholder="Password"
          class="mb-3 h-10 w-1/2 mt-2 bg-gray-50 border-2 rounded-md border-gray-300 text-center"/>
          <input 
            value={confirmPassword()}
            onChange={(e)=>{
              setConfirmPassword(e.currentTarget.value)
            }}
            name="confirmPassword" type="password" placeholder="Confirm Password"
          class="h-10 w-1/2 mt-2 bg-gray-50 border-2 rounded-md border-gray-300 text-center"/>
          <button onClick={(e)=>handleSubmit(e)}class="bg-sky-500 my-5 w-1/2 h-10 rounded-full text-gray-50 mt-10">Submit</button>
      </form>
    </div>
  )
}

const Register=()=>{
  const navigate=useNavigate()
  const pb =new PocketBase('http://127.0.0.1:8090')  
    return (
    <div class="h-screen min-h-screen bg-white flex flex-col">
      <div class="basis-2/12 flex-auto bg-gray-100"></div>
      <div class="basis-10/12 bg-gray-100 flex flex-col">
      <Show when={!validEmail()}><EmailComponent pb={pb}/></Show>
      <Show when={validEmail()}><CredentialComponent pb={pb} /></Show>
      </div>
      <div class="basis-1/12 bg-gray-100 flex flex-row items-start justify-center">
      </div>
    </div>
  );
}

export default Register;
