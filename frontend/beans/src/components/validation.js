const Validation = (values) => {
    let errors={}

    if(!values.fullname) {
        errors.fullname="Namn krävs"
    }

    if(!values.email) {
        errors.email="Mail krävs"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="Ogiltig adress"
    }

   if (!values.password) {
       errors.password="lösenord krävs"
   }
   else if(values.password.length < 5) {
       errors.password="Lösenordet måste vara längre än 5 bokstäver"
   }
   

   return errors;


}

export default Validation;