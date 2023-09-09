import {useNavigate} from "@solidjs/router"
import { createSignal} from 'solid-js'

const SchoolSelection=()=>{
  const navigate=useNavigate()
  const username=sessionStorage.getItem('username')
  const schoolArr=['University of San Diego']//This will eventually be requested from backend
  const [schoolChoice,setSchoolChoice]=createSignal('')
  if (sessionStorage.getItem('loggedIn') != "true"){
    navigate('/')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (schoolArr.includes(schoolChoice())){
      sessionStorage.setItem('schoolSelection',`${schoolChoice()}`)
      navigate("/Pages/MajorList")
    }
  }

  return(
    <div class="h-screen min-h-screen bg-white flex flex-col">
        <p class="bg-gray-100">Logged in as : {username}</p>
      <div class="basis-1/12 flex-auto bg-gray-100" />
      <div class="basis-10/12 bg-gray-100 flex flex-col items-center text-xl">
        <h1 class="text-xl">Select Your School</h1>
        <div class="flex flex-row items-center w-1/2 justify-center gap-4 mt-2">
          <select onInput={(e)=>setSchoolChoice(e.currentTarget.value)}class="w-1/2 bg-gray-150 border-2 rounded-md border-gray-300" name="select">
            <option selected="selected">&nbsp</option>
            <option>University of San Diego</option>
          </select>
          <button onClick={(e)=>handleSubmit(e)} class="bg-sky-500 w-1/5 h-7 rounded-full text-gray-50 justify-self-end">Continue</button>
        </div>
      </div>
    <div class="basis-1/12 bg-gray-100 flex flex-row items-start justify-center" />
    </div>
  )
}
export default SchoolSelection

