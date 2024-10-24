const parent=()=>{
    const ref=useRef('')

    return(
        <div>
            <ChildComp props={props} ref={ref}/>
            <button onClick={()=>{ref.current.chngFS() ;console.log(ref.current.value)}} >focus</button>
        </div>
    )
}
import {React,useRef,useImperativeHandle,forwardRef} from 'react'
const ChildComp=forwardRef(({num},ref)=> {
 
 const iRef=useRef(null) ;

  useImperativeHandle(ref, () => ({
    name:'admin',
    chngFS: () => {
      iRef.current.style.fontSize ="30px";
      iRef.current.style.color ="red";
      iRef.current.style.backgroundColor ="#ccc";
      iRef.current.style.borderRadius ="10px";
    }
  }), [iRef]);


  return (
    <div style={{border:'1px solid red',width:'400px',borderRadius:'20px',margin:'10px',padding:'10px'}}>
       <p>this is admin component</p>
        <h4>{num}</h4>
        <input type="text" ref={iRef}   />
        <button onClick={()=>{ref.current.focus();ref.current.style.fontSize = "30px";}} >focus</button>
    </div>
  )
})

export default ChildComp;
////////////////////////////////////////////////////////////////////////////////////////////////
