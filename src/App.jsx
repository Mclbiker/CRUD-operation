import Findcoder from "./components/Findcoder"
import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Explore from "./components/Explore"
import Hire from "./components/Hire"
import Dev from "./components/Dev"
import Challenges from "./components/Challenges"
import { Link } from "react-router-dom"
import HomePage from "./crud/HomePage"
import Createuser from "./crud/Createuser"
import Users from "./crud/Users"
import EditPage from "./crud/Edituser"

var App=()=>{
    return(
        <div>
            <BrowserRouter>
            <HomePage></HomePage>
            <Routes>
                <Route element={<Createuser/>} path="/"></Route>
                <Route element={<Users></Users>} path="/users"></Route>
                <Route element={<EditPage></EditPage>} path="/edit/:id"/>
            </Routes>
            </BrowserRouter>

            {/* <BrowserRouter>
             <Findcoder></Findcoder>

            <Routes>
                <Route element={<Explore/>} path='/'/>
                <Route element={<Hire></Hire>} path='/hire'/>
                <Route element={<Dev></Dev>} path='/dev'/>
                <Route element={<Challenges/>} path='/challenges'/>
            </Routes>
            </BrowserRouter>    */}
        </div>
    ) }
  export default App
