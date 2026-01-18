import { useState } from "react";


const Ritu =()=>{

    const [name,setName]=useState('');

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log('submited',name)
        setName('')
    }
    return(
    <div>
    <form action="" 
    onSubmit={(e)=>{
        submitHandler(e)
    }}>

        <input 
        type="text" 
        placeholder="Enter your name"
        value={name} 
        onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <button>Submit</button>
    </form>

    
    </div>
   
    )
}


export default Ritu