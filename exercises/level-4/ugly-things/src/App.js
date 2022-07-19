import React from "react"
import Form from "./Form"
import List from "./List"
import {DataContextProvider} from "./dataContext"






function App(props) {

  

  return (
    <>
      <DataContextProvider>
        <Form />
        <List />
      </DataContextProvider>
    </>
  );
}

export default App;
