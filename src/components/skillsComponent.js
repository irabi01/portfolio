import React from 'react'

const SkillsComponent = () =>{
    return (
        <div className="skill_component">
            <div className="container">
                <h1>Skills</h1>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="content">
                            <p>Front-end development</p>
                            <div className="front_end_language">
                                <span>React.Js</span>
                                <span>Next.Js</span>
                                <span>Gatsby</span>
                                <span>Vue.Js</span>
                                <span>React Native</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <div className="content">
                            <p>Back-end development</p>
                            <div className="front_end_language">
                                <span>Python</span>
                                <span>Django</span>
                                <span>Flask</span>
                                <span>Laravel</span>
                                <span>REST API</span>
                                <span>GraphQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="content">
                            <p>Style</p>
                            <div className="front_end_language">
                                <span>CSS</span>
                                <span>SCSS</span>
                                <span>ReactStrap</span>
                                <span>Bootstrap</span>
                                <span>Vuetify</span>
                                <span>Material design lite</span>
                                <span>W3.CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="content">
                            <p>Database</p>
                            <div className="front_end_language">
                                <span>MySQL</span>
                                <span>PostgreSQL</span>
                                <span>SQL Server</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="content">
                            <p>DevOps</p>
                            <div className="front_end_language">
                                <span>Linux (Ubuntu)</span>
                                <span>VPS (DigitalOcean)</span>
                                <span>Netlify</span>
                                <span>Zeit</span>
                                <span>Pythonanywhere</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillsComponent