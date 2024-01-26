// import Menu from '../menu/Menu'
import './Sider.scss'
// import { useState } from 'react'

const Sider = () => {

  const links = [ 
    {id: 1, name: "General", value: "general", img: <img src="app.svg" alt="" />},
    {id: 2, name: "Entertainment", value: "entertainment", img: <img src="app.svg" alt="" />},
    {id: 3, name: "Health", value: "health", img: <img src="app.svg" alt="" />},    
    {id: 4, name: "Sports", value: "sports", img: <img src="app.svg" alt="" />},
    {id: 5, name: "Technology", value: "technology", img: <img src="app.svg" alt="" />},
  ]

  // const [active, setActive] = useState(1);
  // const [category, setCategory] = useState("general");
  // const [itens, setItens] = useState([]);

  // function onClick(id, value) {
  //   setActive(id)
  //   setCategory(value)
  //   }
  return (
    <div className='menu'>
      <div className='item'>
        <span className='title'>Latest News</span>    
        <div className='listItem'>          
          {/* <img src="app.svg" alt="" /> */}
          {/* <Menu active={active} setActive={setActive} setCategory={setCategory} /> */}
          <ul className='item'>
            {links.map((link) => (
              <li
                key={link.id}
                // className={active === link.id ? "active" : ""}
                // onClick={() => onClick(link.id, link.value)}
              >
                {link.img}
                {link.name}
              </li>
            ))}
          </ul>
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

export default Sider