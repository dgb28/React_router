import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/React_router/" element={<Layout/>}>
      <Route path="/React_router/" element={<Home/>}/>
      <Route path="/React_router/about" element={<About/>}/>
      <Route loader={githubInfoLoader} path="/React_router/github" element={<Github/>}/>
      <Route path="/React_router/user/" element={<User/>}>
        <Route path=":userid" element={<User/>}/>
      </Route>
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
