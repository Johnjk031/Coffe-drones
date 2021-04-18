import React, { useState } from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"
import './Navbar.css'
import Coffemenu from '../menu'
import About from '../our-coffe';
import MyProfile from '../my-profile';
import MyStatus from '../order-status';
import Home from '../landing-page';
import CartStatus from '../cart'
import open from '../bars-solid.svg'
import closed from '../times-solid.svg'





const Nav = () => {

const [openMenu, setOpenMenu] = useState(false)
const [button, setButton] = useState(true)






const closeMenu = () => {
  setOpenMenu(false)
}




  return (
    <Router className="Route-app" id="root">
      {/*  <Coffemenu /> */}

 <section className={button ? "shown" : "closed-menu"}>

{/*          <img src={open} alt="open" />     */}
 
 </section>

   <section className={openMenu ? "open-menu" : "closed-menu"}>
   <ul className="menu-link-list">
   <li onClick={closeMenu}><NavLink to="/menu" className="link-text" style={{ fontSize: '32px' }}>Meny</NavLink></li>
   <div className="li-line"></div>
   <li onClick={closeMenu}><NavLink to="/our-coffe" className="link-text" style={{ fontSize: '32px' }}>Vårt kaffe</NavLink></li>
   <div className="li-line"></div>
   <li onClick={closeMenu}><NavLink to="/my-profile" className="link-text" style={{ fontSize: '32px' }}>Min profil</NavLink></li>
   <div className="li-line"></div>
   <li onClick={closeMenu}><NavLink to="/orderstatus" className="link-text" style={{ fontSize: '32px' }}>Orderstatus</NavLink></li>
   
   </ul>
   </section>

   <section onClick={() => setOpenMenu(!openMenu)} className="navbar-secton">
   <article>{openMenu ? <img className="img-closed" src={closed} alt="closed" /> : <img className="img-open" src={open} alt="open" />}</article>
   </section>

 <section className={openMenu ? "closed-menu" : "open-route"}>
 <Route path="/menu" component={Coffemenu} exact>
    <Coffemenu />
  </Route>
  </section>

  <section className={openMenu ? "closed-menu" : "open-route"}>
  <Route path="/our-coffe" component={About} exact>
    <About />
  </Route>
</section>

<section className={openMenu ? "closed-menu" : "open-route"}>
  <Route path="/my-profile" component={MyProfile} exact>
    <MyProfile />
  </Route>
  </section>


  <section className={openMenu ? "closed-menu" : "open-route"}>
   <Route path="/orderstatus" component={MyStatus} exact />
     </section>

     <section className={openMenu ? "closed-menu" : "open-route"}>
  <Route path="/" component={Home} exact>
    <Home />
  </Route>
  </section> 

  <Route path="/cart" component={CartStatus} exact>
    <CartStatus />
  </Route>

  </Router>
  );
}



export default(Nav);