import PocketBase from 'pocketbase'
import {useNavigate,A} from "@solidjs/router"
import { createSignal,Show} from 'solid-js'

function App() {
  const navigate=useNavigate()
  const pb = new PocketBase('http://127.0.0.1:8090')
  const [loginError,setLoginError]=createSignal(false)
  const [form,setForm]=createSignal({
    email:"",
    password:""
  })

  const handleLogin=async(e)=>{
    e.preventDefault()
    try{
      let login=await pb.collection('users').authWithPassword(`${form().email}`,`${form().password}`)
      if (pb.authStore.isValid){
        setLoginError(false)
        navigate('/Pages/SchoolSelection')
        sessionStorage.setItem('loggedIn','true')
        sessionStorage.setItem('username',`${form().email}`)
      }
    }catch(e){
      setLoginError(true)
      console.error(e.message)
      setForm({
        email:"",
        password:""
      })
    }
  }

  const handleGuest=()=>{
    sessionStorage.setItem('username','Guest')
    sessionStorage.setItem('loggedIn','true')
    navigate('/Pages/SchoolSelection')
  }

  return (
    <div class="h-screen min-h-screen bg-white flex flex-col">
      <div class="basis-1/12 flex-auto bg-gray-100"></div>
      <div class="basis-10/12 bg-gray-100 flex flex-col">
        <div class="bg-gray-50 w-1/3 self-center h-4/5 my-10 rounded-md shadow-xl flex flex-col items-center">
          <h1 class="my-8 antialiased text-4xl">Sign in</h1>
          <Show
            when={loginError()}  
            fallback={<h1 class='text-lg'>&nbsp</h1>}
          >
            <h1 class="antialiased text-lg text-rose-600">Credentials not recognized</h1>
          </Show>
          <form class="w-full flex flex-col items-center">
          <input 
            value={form().email}
            onChange={(e)=>{
              setForm({...form(),email:e.currentTarget.value})
            }}
            name="email" type="text" placeholder="Username or Email"
          class="my-10 h-10 w-1/2 bg-gray-50 border-2 rounded-md border-gray-300 text-center"/>
          <input 
              value={form().password}
            onChange={(e)=>{
              setForm({...form(),password:e.currentTarget.value})
            }}
            name="password" type="password" placeholder="Password"
          class=" h-10 w-1/2 bg-gray-50 border-2 rounded-md border-gray-300 text-center"/>
          <p class="my-5 text-sky-800">Forgot Password?</p>
          <button onClick={(e)=>handleLogin(e)}class="bg-sky-500 my-10 w-1/3 h-1/8 rounded-full text-gray-50">Log in</button>
          </form>
          <div class="flex flex-row w-full h-1/8 justify-center items-center">
            <div class="h-1 w-1/3 bg-gray-300 rounded-full"></div>
            <a class="text-black mx-5">or</a>
            <div class="h-1 w-1/3 bg-gray-300 rounded-full"></div>
          </div>
          <button onClick={handleGuest}class="bg-sky-500 my-8 w-1/3 h-1/8 rounded-full text-gray-50">Guest Login</button>
        </div>
      </div>
      <div class="basis-1/12 bg-gray-100 flex flex-row items-start justify-center">
        <p>New to Equal Start?</p>
        <A class="mx-5 text-sky-800" href="/Pages/Register">Create Account </A>
      </div>
    </div>
  );
}

export default App;
