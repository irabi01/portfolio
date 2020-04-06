import React from "react"
import { Link } from "gatsby"
import logo from '../images/logo.png'
import logo_2 from '../images/logo.jpeg'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeComponent1 from "../components/homeComponent1"
import SkillsComponent from "../components/skillsComponent"
// import { FaReact } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="outer_home_page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              <div className="profile_pic"><img src={logo_2} alt="logo"/></div>
              <h1>Irabi Kassim</h1>
              <p>A Full-stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeComponent1/>
    <SkillsComponent/>
  </Layout>
)

export default IndexPage
