// import React from 'react'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Card from './components/card/Card'
import BigCard from './components/bigCard/BigCard'
import './styles/global.scss'

const App = () => {
  return (
    <div className='app__main'>
      <div className='app__navbar'>
        <Navbar />
      </div>
        <div className='app__container'>
          <div className='app__menuContainer'>
            <Menu />
          </div>
          <div className='app__contentContainer'>
            <div className='app__card'>
              <Card />
            </div>
          </div>          
        </div>
        <div className='app__bigCard'>
            <BigCard />
        </div>

    </div>
  )
}

export default App