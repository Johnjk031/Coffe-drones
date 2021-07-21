import React from 'react'
import MyProfile from './my-profile'
import SignedUp from './signUpSuccess'

import store from '../redux/store'

const Form = () => {

    // shortcut for importing redux state
    let user = store.getState().drink.user


    return(
        <section>
            {/* choose component, depending if user is online */}
            { user.online ? <SignedUp /> : <MyProfile /> }
            
        </section>
    )
}

export default Form;