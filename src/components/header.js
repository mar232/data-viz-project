import React from 'react'
import { Link } from 'gatsby'
import './Header.css'


const Header = ({ siteTitle }) => (
 
  <div classname="Header">
    <div classname="HeaderGroup">
      <Link to="/"><img src={require('../images/taxi.png')} width="30" /></Link>
      <Link to="/courses">Tableau</Link>
      <Link to="/download">Carto</Link>
      <Link to="/botón"><button>Button</button></Link>
    </div>
  </div>

)

export default Header
