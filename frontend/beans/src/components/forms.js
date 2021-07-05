import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MyProfile from './my-profile'
import SignedUp from './signUpSuccess'

import store from '../redux/store'

const Form = () => {

    let testVar = store.getState().drink.user


    console.log(testVar)

    return(
        <section>
            { testVar.online ? <SignedUp /> : <MyProfile /> }
            
        </section>
    )
}

export default Form;