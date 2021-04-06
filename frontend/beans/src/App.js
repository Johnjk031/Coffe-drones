
import React, { useEffect } from 'react';
import axios from 'axios'
import "./App.css"
import Nav from './components/Navbar/Navbar';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Coffemenu from './components/menu';



function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/coffe')
      .then(res => {
        console.log(res)
        setPosts(res.data.menu)
      })
      .then(console.log(posts))
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <section>
      <Nav />

    </section>

  )

}
export default App;