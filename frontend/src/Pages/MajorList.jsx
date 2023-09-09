import PocketBase from 'pocketbase'
import {For, createSignal} from 'solid-js'
import {A} from "@solidjs/router"

const MajorList=()=>{
  const pb = new PocketBase('http://127.0.0.1:8090')
  const username=sessionStorage.getItem('username')
  const schoolSelection=sessionStorage.getItem('schoolSelection')
  const [majorList,setMajorList]=createSignal([])
  const populateMajors=async(e)=>{
    //This returns an object which has the actual major informatin stored in a string contained within the Majors field. 
    //Access it using major.Majors
    try{
      //split.join is replaces whitespaces for underscores in order to fit the backend query format.
      const majors = await pb.collection(`${schoolSelection.split(' ').join('_')}`).getFullList({
        sort: '-created',
      });
      setMajorList(majors)
    }catch(e){
      console.error(e.message)
    }
  }
  populateMajors()
    return(
    <div class="h-screen min-h-screen bg-gray-100 flex flex-col">
        <p class="bg-gray-100">Logged in as : {username}</p>
      <h1 class='text-3xl text-center mt-5'>Majors at {schoolSelection}</h1>
      <div class="h-1 w-1/2 bg-gray-300 rounded-full self-center">&nbsp</div>
      <div class="bg-gray-100 flex flex-col align-left">
        <ul class="my-10 ml-5">
          <For each={majorList()}>{(major) =>
            <li>
              <A href="/Pages/ViewMajor" onClick={(e) => sessionStorage.setItem("MajorSelection",`${major.id}`)}>
                {major.Name}
              </A>
            </li>
          }</For>
      </ul>
      </div>
    </div>
    )
}
export default MajorList
