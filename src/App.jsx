 import React from 'react'
 import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Cards from'./components/Cards'
import Counterapp from './components/Counterapp'
import Backgroudchange from'./components/Backgroudchange' 
import Post from './components/Post'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Formdata from './components/Formdata'
import Childprop from './components/Childprop'
import Propchild1 from './components/Propchild1'
import Todoapp from './components/Todoapp'
import Weather from './components/Weather'
import Weathetapp from './components/Weathetapp'
 
 const App = () => { 

  let fname = "Ashish Kumar Sharma";
  let email="ashu786ashish@gmail.com";

  //---------------------------------------------------------
  let username = "@Ashish Sharma";
  let password ="@Ashu0909";
   return (
    
     <Router>

      <Navbar />

      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

       <Route path="/counterapp" element={<Counterapp/>} />

        <Route path="/cards" element={<Cards/>}/>
 
        <Route path="/backgroudchange" element={<Backgroudchange/>}/>

        <Route path="/post" element={<Post/>}/>
      
      <Route  path="/formdata" element={<Formdata/>}/>
      <Route path="/childprop" element ={<Childprop firstName={fname} firstEmail={email}/>}/>
      <Route path='/propchild1' element={<Propchild1 firstuserName={username} firstpassword={password} />}/> 
      <Route path='/todoapp' element={<Todoapp/>}/>
      <Route path = '/weather' element={<Weather/>}/>
      <Route path='/weatheapp' element={<Weathetapp/>}/>
      
       
      </Routes>

    </Router>
   )
 }
 
 export default App
 
