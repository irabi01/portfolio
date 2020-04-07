import React from 'react'
import Layout from '../components/layout'
import ihi_image from '../images/ihi.png'
import helpothers from '../images/helpothers.png'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className="project_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h1>Recently Projets</h1>
                                <p>Samples of some of my work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="content">
                                projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ProjectsPage