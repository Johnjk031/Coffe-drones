import React from 'react'
import './css/landingpage.css'
import bean from './svgs/airbean-landing.svg'
import right from './svgs/intro-graphic-right.svg'
import left from './svgs/intro-graphic-left.svg'


class Home extends React.Component {
    
render() {
 
    // just a bunch of SVG's in this component

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