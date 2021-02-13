import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// https://reactrouter.com/web/example/basic
import './Navbar.scss';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    function toggleMobileMenu (){
        document.querySelector('#menu').classList.toggle('active')
        document.querySelector('.mobile-bar').classList.toggle('active')
    }
    return (
            <div class="Navbar">
                <input type="checkbox" id="nav-check"/>

                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <NavLink exact to = "/">Accueil</NavLink> 
                    <NavLink exact to = "Coach">Club</NavLink>
                    <NavLink exact to = "/">Planning</NavLink> 
                    <NavLink exact to = "/">S'inscrire</NavLink> 
                    <NavLink exact to = "Abonnement">Abonnements</NavLink>
                    <NavLink exact to = "/">Contact</NavLink> 
                    <NavLink exact to = "/">Covid-19</NavLink> 
                </div>
            </div>
    )
}



export default Navbar

// <div className="Navbar">
// <nav className="container" id="container">
    // <ul>
        // <li>
        //     <NavLink exact to = "/">Accueil</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "Coach">Club</NavLink>
        // </li>
        // <li>
        //     <NavLink exact to = "/">Planning</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "/">S'inscrire</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "Abonnement">Abonnements</NavLink>
        // </li>
        // <li>
        //     <NavLink exact to = "/">Contact</NavLink> 
        // </li>
        // <li>
        //     <NavLink exact to = "/">Covid-19</NavLink> 
        // </li>
    // </ul>
//     <div className="mobile-bar" onClick={toggleMobileMenu}> 
//         <span></span>
//         <span></span>
//         <span></span>
//     </div>
// </nav>
// </div>
