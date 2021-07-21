import React from 'react'
import './confirm.css'


const NoItems = () => {

  
// in case no items have been purchased

    return(
        <section className="main-confirm">
            <h1 className="no-items">Det finns inget i varukorgen</h1>
        </section>
    )
}

export default NoItems;