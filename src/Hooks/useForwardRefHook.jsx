const parent=()=>{
    const ref=useRef('')

    return(
        <div>
            <ChildComp props={props} ref={ref}/>
            <button onClick={()=>{
        ref.current.focus()
        ;console.log(ref.current.value)}} >focus</button>
        </div>
    )
}
const ChildComp=forwardRef(({num},ref)=> {
    return(
        <input ref={ref}/>
    )})
////////////////////////////////////////////////////////////////////////////////////////////////
