import { ItemListContainer } from "./components/common/ItemListContainer"
import { Navbar } from "./components/layout/Navbar"



const App = () => {

  return (
      <div>
        <Navbar />
        <ItemListContainer first = {"Welcome to this humble store in the farm"} />
      </div>
  )
}

export default App
