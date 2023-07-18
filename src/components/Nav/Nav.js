import React,{useState,useEffect} from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const [show,handleShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        } else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    },[]) 

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img 
        onClick={() =>navigate("/")}
        className="nav__logo"
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024" 
        alt="" />
        <img 
        onClick={() =>navigate("/profile")}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt=""
        />
        </div>
       
    </div>
  )
}

export default Nav