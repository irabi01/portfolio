import React from 'react'
import logo from '../images/logo.png'

const DevelopmentProcess = () =>{
    return (
        <div>
            <div className="process_section1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="content">
                                <h1>My Process</h1>
                                <h2>From wireframes to code, below is a detailed look at how I run a typical project.</h2>
                                <hr/>
                                <div className="steps w3-card">
                                    <h3><span>STEP 1 -</span> GETTING STARTED</h3>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Brief</h5>
                                            <p>To get a clear picture of what you need I start every project by receiving an initial brief of what you want. Having this gives me enough context to properly provide you with a proposal and ultimately tailor my services to your project goals.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Initial Chat</h5>
                                            <p>The next step is to have a quick 15-minute call so we can properly introduce ourselves and make sure we're both on the same page. This is the perfect time to let me know anything I might need to be aware of during the project.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="steps w3-card">
                                    <h3><span>STEP 2 -</span> DESIGN</h3>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Wireframes</h5>
                                            <p>Having a good set of wireframes is the bedrock of any successful website project. This is where we hammer down the layout and general functionality while always making sure the user is the primary focus.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Designs</h5>
                                            <p>This is where I apply the paint to your website. I'll take the concepts we've agreed on in the wireframes to make them look usable, modern and clean.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="steps w3-card">
                                    <h3><span>STEP 3 -</span> DEVELOPMENT & LAUNCH</h3>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Code</h5>
                                            <p>When the coding begins there will generally be less communication from me as this is quite an involved process that doesn't require much feedback. This is where I take the visuals of your website and make them into something real that people can interact with.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Training</h5>
                                            <p>After the website has been coded but before it goes live I like to provide in-depth training. Going forward your website will be easily updatable by yourself so I'll take you through everything over the phone and even provide screencasts for you to keep.</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                    <img src={logo} style={{width:100}} className="mr-3" alt="..."/>
                                        <div className="media-body">
                                            <h5 className="mt-0">Launch</h5>
                                            <p>When it's time to launch the new site I'll take care of everything. All you'll need to do is get that Tweet ready about your shiny new website!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DevelopmentProcess