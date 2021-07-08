import React, {useEffect, useState,} from 'react'
import Validation from './validation'
import './profile.css'
import Form from './forms'
import { connect } from 'react-redux'
import { signIn } from '../redux/coffe/coffe-actions'
import { useHistory } from "react-router-dom";
import header from './graphics-header.svg'
import footer from './graphics-footer.svg'


const MyProfile = ({ signIn }) => {

    const history = useHistory();

   const [values, setValues] =  useState({
       fullname: "",
       email: "",
       password: ""
   })

   const [errors, setErrors] = useState({})

   const [dataIsCorrect, setDataIsCorrect] = useState(false)

   const handleChange = (e) => {
         setValues({
        ...values,
        [e.target.name]: e.target.value,
         })
   }

  


 
   const handleFormSubmit = (e) => {
       e.preventDefault();
       setErrors(Validation(values))
       setDataIsCorrect(true)

       signIn({
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        online: true
       })



   }

    useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
        history.push("/signed-up");
    }
    }, [errors])

    

    return(
        <section className="main-g">
            <img src={header} alt="header" />
            <section className="app-wrapper">
                <section>
                    <h2 className="create-account-text">Skapa konto</h2>
                </section>
                <form className="form-wrapper" onSubmit={(e) => handleFormSubmit(e)}>
                    <section className="user-name">
                        <label className="label">Namn</label>
                        <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                    { errors.fullname && <p className="error-text">{errors.fullname}</p>}
                    </section>

                    <section className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange} />
                        { errors.email && <p className="error-text">{errors.email}</p>}
                    </section>

                    <section className="password">
                        <label className="label">Lösenord</label>
                        <input className="input" type="password" name="password" value={values.password} onChange={handleChange} />
                        { errors.password && <p className="error-text">{errors.password}</p>}
                    </section>

                    <section>
                        <button className="user-submit">KÖR</button>
                    </section>

                </form>
            </section>
            <img className="menu-footer" src={footer} alt="footer" />
        </section>
    )
}


const mapStateToProps = dispatch => {
    return {
   
   signIn: (id) => dispatch(signIn(id))
    };
};

export default connect(null, mapStateToProps)(MyProfile)