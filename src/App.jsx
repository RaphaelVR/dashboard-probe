import Navbar from './components/navbar/Navbar'
import Sider from './components/sider/Sider'
import Card from './components/card/Card'
import './styles/global.scss'


const App = () => {
  return (
    <div className='app__main'>
      <div className='app__navbar'>
        <Navbar />
      </div>
        <div className='app__container'>
          <div className='app__menuContainer'>
            <Sider />
          </div>
          <div className='app__contentContainer'>
            <div className='app__card'>
              <Card />
            </div>
          </div>          
        </div>
    </div>
  )
}

export default App