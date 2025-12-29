import './App.css'
import {delayedLogger} from './utils/delayedLogger.js'
function App() {

  return (
    <>
      {delayedLogger('Hello after 2 seconds', 2000)}
    </>
  )
}

export default App
