import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import './Navbar.css'
import Coffemenu from '../menu'
import About from '../our-coffe';
import MyProfile from '../my-profile';
import MyStatus from '../order-status';





const Nav = () => {

const [openMenu, setOpenMenu] = useState(false)

const HandleMenu = () => {
setOpenMenu(true)
}
const closeMenu = () => {
  setOpenMenu(false)
}

  return (
    <Router className="Route-app" id="root">
      {/*  <Coffemenu /> */}

 <button onClick={() => setOpenMenu(!openMenu)} className={openMenu ? "navbar-btn-closed" : "navbar-btn"}>Open</button>
 
   <section className={openMenu ? "grid-menu" : "closed-menu"}>
   <ul>
   <li onClick={closeMenu}><Link to="/menu"><p className="link-text">Meny</p></Link></li>
   <li onClick={closeMenu}><Link to="/our-coffe"><p className="link-text">Vårt kaffe</p></Link></li>
   <li onClick={closeMenu}><Link to="/my-profile"><p className="link-text">Min profil</p></Link></li>
   <li onClick={closeMenu}><Link to="/orderstatus"><p className="link-text">Orderstatus</p></Link></li>
   </ul>
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
  <Route path="/orderstatus" component={MyStatus} exact>
    <MyStatus />
  </Route>
</section>
  </Router>
  );
}
export default Nav;