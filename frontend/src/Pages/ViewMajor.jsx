import PocketBase from 'pocketbase'
import {createSignal} from 'solid-js'

const ViewMajor=()=>{
  const username=sessionStorage.getItem('username')
  const pb = new PocketBase('http://127.0.0.1:8090')
  const majorId=sessionStorage.getItem('MajorSelection')
  const schoolName=sessionStorage.getItem('schoolSelection')
  const [data,setData]=createSignal({}) 

  const getData=async()=>{
    try{
      const major = await pb.collection('University_Of_San_Diego').getOne(`${majorId}`, {
        expand: 'relField1,relField2.subRelField',
      });
      setData(major)
    }catch(e){
      console.error(e.message)
    }
  }
  getData()
  return(
    <div name="screen" class="h-full min-h-screen bg-gray-100 flex flex-col">
        <p  name="logInText" class="bg-gray-100">Logged in as : {username}</p>
        <h1 name="Title" class='text-4xl text-center mt-5'>{data().Name}</h1>
      <div name="contentContainer" class='h-full flex flex-col bg-gray-100 mx-80 mt-2'>
        <div name="stylingPipe" class="h-1 w-full bg-gray-300 rounded-full self-center mt-2">&nbsp</div>
        <a name="linkToSite" href={data().Link} target="_blank" class="underline text-center mt-2 text-teal-500" >{data().Name} at {schoolName}</a>
        <p name="description" class="text-center mt-3">{data().Description}</p>
        <div name="salaryContainer" class="self-center bg-gray-100 flex flex-col mt-5">
          <h1 name="salaryHeader" class='text-2xl text-center'>Salary</h1>
          <div name="stylingPipe" class="h-1 w-full bg-gray-300 rounded-full self-start">&nbsp</div>
        </div>
        <table name="employmentChart"class="text-center table-auto mt-3 w-full self-center my-2">
          <thead>
            <tr>
              <th>Employment</th>
              <th>Employment RSE</th>
              <th>Mean Hourly Wage</th>
              <th>Meascreen n Annual Wage</th>
              <th>Wage RSE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data().Employment}</td>
              <td>{data().EmploymentRSE}</td>
              <td>{data().MeanHourlyWage}</td>
              <td>{data().MeanAnnualWage}</td>
              <td>{data().WageRSE}</td>
            </tr>
          </tbody>
        </table>
        <table name="percentileChart" class="my-2 text-center table-auto mt-3 w-full self-center">
          <thead>
            <tr>
              <th>Percentile</th>
              <th>10%</th>
              <th>25%</th>
              <th>50%(Median)</th>
              <th>75%</th>
              <th>90%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hourly Wage</td>
              <td>{data().Percentile10H}</td>
              <td>{data().Percentile25H}</td>
              <td>{data().Percentile50H}</td>
              <td>{data().Percentile75H}</td>
              <td>{data().Percentile90H}</td>
            </tr>
            <tr>
              <td>Annual Wage</td>
              <td>{data().Percentile10A}</td>
              <td>{data().Percentile25A}</td>
              <td>{data().Percentile50A}</td>
              <td>{data().Percentile75A}</td>
              <td>{data().Percentile90A}</td>
            </tr>

          </tbody>
        </table>
        <a name="salaryLink" href="https://www.bls.gov/oes/current/oes132011.htm#(3)" target="_blank" class="underline text-center mt-2 text-teal-500" >More Salary Statistics</a>
        <div name="careersContainer" class="self-start bg-gray-100 flex flex-col mt-5">
          <h1 name="careerHeader" class='text-2xl text-center'>Careers</h1>
          <div name="stylingPipe" class="h-1 w-full bg-gray-300 rounded-full self-start">&nbsp</div>
        </div>
        <p class="mt-1">Examples of potential careers for this major:</p>
        <p>{data().Careers}</p>
        <div name="projectionContainer" class="self-start bg-gray-100 flex flex-col mt-5">
          <h1 name="projectionHeader" class='text-2xl text-center'>Growth</h1>
          <div name="stylingPipe" class="h-1 w-full bg-gray-300 rounded-full self-start">&nbsp</div>
        </div>
        <p class="mt-1">Business and Financial operations employment is expected to grow by {data().GrowthRate} by 2031</p>
        <p class="mt-1">The median annual salary is expected to be {data().GrowthSalary} by 2031</p>
        <div name="courseWorkContainer" class="self-start bg-gray-100 flex flex-col mt-5">
          <h1 name="courseWorkHeader" class='text-2xl text-center'>Coursework overview</h1>
          <div name="stylingPipe" class="h-1 w-full bg-gray-300 rounded-full self-start">&nbsp</div>
        </div>
        <p class="mt-1">Total credits required: 128</p>
        <p>Average years to complete: 4.5</p>
      </div>
    </div>
   ) 
}

export default ViewMajor


