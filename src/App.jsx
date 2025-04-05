

import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import { Provider } from "react-redux"
import appStore from './component/utils/appStore'
function App() {


  return (
    <Provider store={appStore}>
      <div>
      <Header className="text-bold" />
      <Body />``
      </div>
     
    </Provider>
  )
}

export default App
