import React from 'react'
import './css/landingpage.css'
import bean from './airbean-landing.svg'
import right from './intro-graphic-right.svg'
import left from './intro-graphic-left.svg'


class Home extends React.Component {
    
render() {
 


    return(
        <div className="grid-landingpage">
        
        <section className="home-page">
           
   
    <section className="right">
        <article className="right">
    <img src={left} alt="left" />
    </article>

    <article className="bean">
    <img src={bean} alt='bean'  />
    </article>

    <article>
    <img src={right} alt="right" />
    </article>
    </section>

        </section>

   


        </div>
    )
}

}
export default Home