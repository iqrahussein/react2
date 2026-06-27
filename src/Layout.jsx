import Header from "./Header"

const App=()=>{
  const UserName ="Hamdi"
  const Email ="iqra@123"

  return(
    <>
    <Header 
    Username={UserName}
    Email ={Email}
    ></Header>
    <h1>hello world</h1>

    </>
  )
}

export default App;