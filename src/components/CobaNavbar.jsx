import React,{useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import '../main.css'

export const NavBar2 = () => {
const NavRef = useRef();
const showNavBar = () => {
    NavRef.current.classList.toggle("responsive-nav");
}

    return(
        <header>
            <h3>Logo</h3>
            <nav ref={NavRef}>
                <a href="/#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="/#">Project</a>
                <button className="nav-btn close-btn" onClick={showNavBar}>
                <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}