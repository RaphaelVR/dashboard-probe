  const links = [ 
    {id: 1, name: "General", value: "general", img: <img src="app.svg" alt="" />},
    {id: 2, name: "Entertainment", value: "entertainment", img: <img src="app.svg" alt="" />},
    {id: 3, name: "Health", value: "health", img: <img src="app.svg" alt="" />},    
    {id: 4, name: "Sports", value: "sports", img: <img src="app.svg" alt="" />},
    {id: 5, name: "Technology", value: "technology", img: <img src="app.svg" alt="" />},    
  ]


const Menu = () => {
  return (
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
  )
}

export default Menu

