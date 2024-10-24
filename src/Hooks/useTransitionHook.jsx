import {React,useState,useDeferredValue,useTransition} from 'react'
import './test.css'

function TestHome() {
  const [data,setData]=useState([{city:'',email:'@email',id:'',name:'khdfdj',phone:'54545',profile_id:''}])
  // const deffData=useDeferredValue(data)
  const [isPending, startTransition] = useTransition();  

  const getData=async()=>{
    const res=await fetch("https://api.mockaroo.com/api/7e8bdfe0?count=1000&key=2849d090")
    const data=await res.json()
    startTransition(()=>{setData(data)})
 
  }

  return (
    <div>
      <p style={{cursor:'pointer'}}>Home component</p>
        <input placeholder='input' />
        <p>{isPending?"getting...":"Get Data"}</p>
        <div className='container'>
        {
          data.map((items,index)=>{return(
            <div style={{border:'1px solid red',width:'200px'}}  key={index}>
                <img src={require('./location/city-1.png')} width={100} height={100}
                 style={{width:'200px',height:'200px'}}/>
                 <div
                  style={{display:"flex",flexWrap:'wrap',marginTop:'-20px',width:'100%'}}>
                  <p>{items.email}</p>
                  <p>{items.email}</p>
                  <p>{items.email}</p>
                  <p>{items.email}</p>
                 </div>
            </div>
          )})
        }
        </div>
     
        <button onClick={getData} 
        style={{width:'150px',padding:'10px',marginTop:'100px',cursor:'pointer'}} >get Data</button>
    </div>
  )
}

export default TestHome
