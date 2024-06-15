import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Pages/Home.jsx'
import Categories from './components/Pages/Categories.jsx'
import About from './components/Pages/About.jsx'
import ProvideResultsContext from './components/Context/resultsContext.jsx'
import RecipeDetails from './components/Pages/RecipeDetails.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/:mealId" element={<RecipeDetails/>} />
      <Route path="Categories" element={<Categories/>}/>
      <Route path="About" element={<About/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideResultsContext>
    <RouterProvider router={route} />
    </ProvideResultsContext>
  </React.StrictMode>,
)
