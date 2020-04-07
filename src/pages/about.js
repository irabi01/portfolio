import React from 'react'
import Layout from '../components/layout'

const AboutPage = () =>{
    return(
        <Layout>
            <div className="about_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h1>About Me</h1>
                                <p>Find out who I am, where I'm from and what I'm all about.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_section_one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="content">
                                <h1>Who I Am</h1>
                                <p>My name's Irabi Kassim. I'm a web designer and developer based in Tanzania</p>
                                <p>I have 4 years commercial experience providing full-stack development, producing high quality responsive websites and exceptional user experience.</p>
                                <p>During the day I’m the lead developer at a health Institute. During the evenings I spend my time working on freelance projects and building my own products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_secction_two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="content">
                                <h1>Why Work With Me</h1>
                                <p>There’s nothing I enjoy more than designing and developing good web and mobile applications for nice people.</p>
                                <p>I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>
                                <p>If you’ve got a project you’d like to work on with me just <a href="mailto:irabikassim01@gmail.com">get in touch</a> and we can get to work!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage