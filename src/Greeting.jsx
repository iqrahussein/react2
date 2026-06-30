import { useState } from "react";
// use state count
// const Greeting =()=>{

//   // let count = 0;
//   const [count,useCount] =useState(0)
  

//   const increment =()=>{
//     //  count=count+1;
//      useCount(count+1);
//      console.log(count)
//   }

//   return(
//     <>
//     <p> You clicked {count} times</p>
//     <button onClick={increment}>Click me </button>
//     </>
//   )
// }

// export default Greeting


// const visible=()=>{

//   const [isVisible ,setisVisible]=useState(true);
  
//   const toggle=()=>{
//     setisVisible(!isVisible)
//   }
//   return (
//     <>
//     <button onClick={toggle}> {isVisible ? 'hide' : 'show'} message</button>
//     {isVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, animi.</p>}
//     </>
//   )
// }
// export default visible

const app = ()=>{

  const [ istunning , setisTunning ]=useState(true);
  

  const tunningOffOn =()=>{
    setisTunning(!istunning)
  }

  return(
    <>
    {istunning ? <p>The button is OFF</p> :<p>The button is ON</p>}
    <button onClick={tunningOffOn}>Turn {istunning ? "ON":"OFF"}</button>
    </>
  )
}

export default app;