import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './PrimaryComponent/Header'
import NewsComponent from './UI/NewsComponents/NewsComponent'
import SportsComponent from './UI/SportsComponents/SportsComponent'
import GeneralComponent from './UI/GeneralUserInterface/GeneralComponent'
import EntertainmentComponent from './UI/EntertainmentComponent.jsx/EntertainmentComponent'
import PoliticsComponent from './UI/PoliticsComponent/PoliticsComponent'
import TechnologyComponent from './UI/TechnologyComponent/TechnologyComponent'
import Footer from './PrimaryComponent/Footer'
import DisplayFirstComponet from './UI/DisplayComponent/DisplayFirstComponet'
import DisplayComponent from './UI/DisplayComponent/DisplayComponent'

function Container() {
  return (
    <div>
         
          <BrowserRouter>
        
                        <Header/>
                        
                 <Routes>
                        <Route path='/' element={<GeneralComponent/>}/>
                        <Route path='/entertainment' element={<EntertainmentComponent/>}/>
                        <Route path='/news' element={<NewsComponent/>}/>
                        <Route path='/politics' element={<PoliticsComponent/>}/>
                        <Route path='/sports' element={<SportsComponent/>}/>
                        <Route path='/technology' element={<TechnologyComponent/>}/>

                        <Route path='/display'element={<DisplayComponent/>}/>
                 </Routes>

                       <Footer/>
          
          </BrowserRouter>

    </div>
  )
}

export default Container
