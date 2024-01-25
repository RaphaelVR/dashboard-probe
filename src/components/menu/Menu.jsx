import { Link } from 'react-router-dom';
import './Menu.scss'

const Menu = () => {
  return (
    <div className='menu'>
      <div className='item'>
        <span className='title'>MAIN</span>    
          <div className='listItem'>
          
          <img src="app.svg" alt="" />
          <span>APP</span>

          </div>

          <div className='listItem'>
          
          <img src="app.svg" alt="" />
          <span>APP</span>

          </div>
          
          <div className='listItem'>
          
          <img src="app.svg" alt="" />
          <span>APP</span>

          </div>

          <div className='listItem'>
          
          <img src="app.svg" alt="" />
          <span>APP</span>

          </div>


      </div>

    </div>
  )
}

export default Menu