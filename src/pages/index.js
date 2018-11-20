import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Datos Taxis NYC</h1>
      <p>Visualización de datos de los taxis de New York.</p>
      <Link to="/page-2/">Ver los datos</Link>
      </div>
    </div>   
  </div>
  </Layout>
)

export default IndexPage
