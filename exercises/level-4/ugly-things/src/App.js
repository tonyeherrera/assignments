import React from "react"
import Form from "./Form"
import {DataContextProvider} from "./dataContext"





function App(props) {

  // const [uglyData, setUglyData] = useState({initData})

  //   useEffect(()=>{
  //       axios.get(`https://api.vschool.io/tonyeherrera/thing`)
  //           .then(response => {
  //               console.log('respones', response)
  //               setUglyData(response.data)
  //           })   
  //           .catch(error => console.log(error))
  //   },[])

  return (
    <>
      <DataContextProvider>
        <Form />
      </DataContextProvider>
    </>
  );
}

export default App;
