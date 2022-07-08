import React from 'react'
import Types from "../components/Types"
import {Route,Routes} from "react-router-dom"
import Recipe from '../components/Recipe'


function Pages() {
  return (
      <Routes>
        <Route path="/type/:type" element={<Types/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
      </Routes>

  )
}

export default Pages;