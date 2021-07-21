import React, { useState } from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"
import './Navbar.css'
import Coffemenu from '../menu'
import About from '../our-coffe';
import MyProfile from '../my-profile';
import MyStatus from '../order-status';
import Home from '../landing-page';
import CartStatus from '../cart'
import open from '../svgs/bars-solid.svg'
import closed from '../svgs/times-solid.svg'
import Form from '../forms';
import SignedUp from '../signUpSuccess';





const Nav = () => {

// open the menu
const [openMenu, setOpenMenu] = useState(false)


// close the menu
const closeMenu = () => {
  setOpenMenu(false)
}



// all routing 

  return (
    <Router className="Route-app" id="root">
  
   {/*     open menu on button, close on pressing links           */}

   <section className={openMenu ? "open-menu" : "closed-menu"}>
   <ul className="menu-link-list">
   <li onClick={closeMenu}><NavLink to="/menu" className="link-text" style={{ fontSize: '32px' }}>Meny</NavLink></li>
   <div className="li-line"></div>
   <li onClick={closeMenu}><NavLink to="/our-coffe" className="link-text" style={{ fontSize: '32px' }}>Vårt kaffe</NavLink></li>
   <div className="li-line"></div>
   <li onClick={closeMenu}><NavLink to="/forms" className="link-text" style={{ fontSize: '32px' }}>Min profil</NavLink></li>
   <div className="li-line"></div>
   <li onClick={closeMenu}><NavLink to="/orderstatus" className="link-text" style={{ fontSize: '32px' }}>Orderstatus</NavLink></li>
   
   </ul>
   </section>

{/*     classlist toggle (the react way) on button         */}

   <section onClick={() => setOpenMenu(!openMenu)} className="navbar-secton">
   <article>{openMenu ? <img className="img-closed" src={closed} alt="closed" /> : <img className="img-open" src={open} alt="open" />}</article>
   </section>


{/*     the route paths & all main components          */}

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
  <Route path="/forms" component={Form} exact>
    <Form />
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

  <section className={openMenu ? "closed-menu" : "open-route"}>
  <Route path="/my-profile" component={MyProfile} exact>
    <MyProfile />
  </Route>
  </section>

  <section className={openMenu ? "closed-menu" : "open-route"}>
  <Route path="/signed-up" component={SignedUp} exact>
    <SignedUp />
  </Route>
</section>
  </Router>
  );
}



export default Nav;