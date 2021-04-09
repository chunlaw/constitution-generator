import React, {useState} from "react"
import GeneratorDataScheme from "./data-scheme.json"

const GeneratorContext = React.createContext()

export const GeneratorContextProvider = (props) => {
  const [dataObj, setDataObj] = useState({})

  return (
    <GeneratorContext.Provider value={
      {dataObj, setDataObj, GeneratorDataScheme}
    }>
      {props.children}
    </GeneratorContext.Provider>
  )
}

export default GeneratorContext
