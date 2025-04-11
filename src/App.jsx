

import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import { Provider } from "react-redux"
import appStore from './component/utils/appStore'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import WatchVideo from './component/WatchVideo'
import MainContainer from './component/MainContainer'
import { Route, Routes } from 'react-router'
import Demo from './component/Demo'
import Demo2 from './component/Demo2'


function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Body/>,
  //     children:[{
  //       path:"/",
  //       element:<MainContainer />
  //     }, 
  //     {
  //       path:"/watch",
  //       element:<WatchVideo/>
  //     }
  // {
  //   path:"/demo",
  //   element: <><Demo/> <Demo2/></>
  // }
  //   ]
  //   }
  // ])

  return (
    // <Provider store={appStore}>
    //   <div>
    //   <Header className="text-bold" />
    //   {/* <Body /> */}
    //   <RouterProvider router={appRouter}/>
    //   <Footer/>
    //   </div>
    // </Provider>
    <BrowserRouter basename='/'>
      <Provider store={appStore}>
        <div>
          <Header className="text-bold" />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path='/' element={<MainContainer />} />
              <Route path="watch" element={<WatchVideo />} />
              <Route path="demo" element={<Demo />} >
                {/* to see the demo2 http://localhost:5173/demo/demo2 will show both demo and demo2 */}
                <Route path="demo2" element={<Demo2 />} />  

              </Route>
            </Route>
          </Routes>

        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
