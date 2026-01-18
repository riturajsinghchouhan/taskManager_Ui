// import react,{useState} from 'react'

// const App =()=>{
  
//   const [val,setVal] = useState(1);
//   const increase=()=>{
//     setVal(val+1)
//   }
//   const decrease=()=>{
//     setVal(val-1)
//   }

//   const inby5=()=>{
//     setVal(val+5)
//   }

//   return(<>

//     <div>
//       <h1>{val}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>decrease</button>
//       <button onClick={inby5}>increase by 5</button>

//     </div>

//   </>)
// } 

// export default App



import react from 'react'
import Ritu from './components/form'
import Task from './components/taskComponets/taskbord'

const App =()=>{
  return (
  // <Ritu/>
  <Task/>
  )
}
export default App