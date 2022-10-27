import { useState } from "react"
import ClassComponent from "./components/ClassComponent"
import FunctionComponent from "./components/FunctionComponent"

function App() {

  const [showClassComponent, setShowClassComponent] = useState(true)
  const [showFunctionalComponent, setShowFunctionalComponent] = useState(true)

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }} >
      <div>
        <button onClick={() => setShowClassComponent((prev) => !prev)}> Toggle Class Component</button>
        {showClassComponent && <ClassComponent />}
      </div>
      <div>
        <button onClick={() => setShowFunctionalComponent((prev) => !prev)}> Toggle Functional Component</button>
        {showFunctionalComponent && <FunctionComponent />}


      </div>
    </div >
  )
}

export default App
