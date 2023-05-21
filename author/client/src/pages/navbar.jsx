import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbarfor'>
        <ul style={{display:"flex" ,height:"20px" ,justifyContent:"space-evenly" ,alignItems:"center",justifyItems:"center" ,paddingTop:"20px"}}>

            <li style={{listStyle:"none"}}><Link style={{textDecoration:'none',color:'white'}} to={"/"}>Home</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:'none',color:'white'}} to={"/authors"}>Authors</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:'none',color:'white'}} to={"/addauthor"}>Add Author</Link></li>
         
        </ul>
    </div>
  )
}

export default Navbar