import  { useEffect, useState } from 'react'

function Debouncing() {
    const [data,setData]=useState("")
    const [Debouncedata,setDebounce]=useState("")
    useEffect(()=>{
        const time = setTimeout(()=>{
            
            setDebounce(data)
        },1000)

        return ()=>clearTimeout(time)
    },[data])
  return (
    <div>
        {JSON.stringify(Debouncedata)}
      <input type='text' onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default Debouncing
