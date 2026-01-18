import {useState} from 'react'

const Task = ()=>{

    const [headline,setHeadline]= useState('')
    const [about,setAbout]= useState('')
    const [task,setTask]=useState([])

const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task];
    copyTask.push({headline,about})
    setTask(copyTask)
    console.log(`headline is ${headline} and about is ${about}`)
    setHeadline('')
    setAbout('')
}

const deletNote=(idx)=>{
const copyTask =[...task];
copyTask.splice(idx,1)
setTask(copyTask)

}
return (<>

<div className='h-screen lg:flex bg-black text-white  '>
    
   <form className='flex  p-10 gap-4 lg:w-1/2 items-start flex-col' onSubmit={(e)=>{
    submitHandler(e)
   }}>
    <h1 className='text-3xl font-bold'>Add notes </h1>
    <input type="text" 
    placeholder='Enter notes heading'
    value={headline} 
    onChange={(e)=>{
        setHeadline(e.target.value);
    }}
    className='px-5 w-full font-medium py-2 border-2 outline-none rounded'/>
    <textarea 
    type="text"
    className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
    placeholder='Write details'
    value={about}
    onChange={(e)=>{
        setAbout(e.target.value);
    }}
    ></textarea>
    <button className='bg-white font-medium w-full outline-none text-black px-5 py-2  rounded'>Add Note</button>
    
   </form>
    <div className=' lg:w-1/2 lg:border-l-2  p-10 '>
    <h1 className='text-3xl font-bold'>Recent Notes </h1>
    <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>

        {task.map(function(elem,idx){
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl py-9 px-4 pb-4  text-black bg-[url('https://imgs.search.brave.com/pUwW3-iMt61jD9TTk7FwI6SqJx33MyIDsSlzs0N66_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/OTA4LzA2OS9zbWFs/bC9wb3N0LW5vdGUt/cmVtaW5kZXItbWVt/by1wYXBlci1mcmVl/LXBuZy5wbmc')]">
                <div>
                     <h3 className='leading-tight text-xl font-bold'>{elem.headline}</h3>
                     <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.about}</p>
                </div>
               <button  onClick={()=>{
                deletNote(idx)
               }} className='w-full cursor-pointer active:scale-95 bg-yellow-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
        })}
        
      
       
        
       </div>   
    </div>
</div>
</>)
}

export default Task