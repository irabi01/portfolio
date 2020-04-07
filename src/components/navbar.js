import React, { Component } from 'react'
import { Link } from 'gatsby'
// import logo from '../images/logo.png'



class Navbar extends Component {
    // state = {
    //     navbarOpen: false,
    //     css:'collapse navbar-collapse',
    //     links: [
    //         {
    //             id: 1,
    //             path: '/',
    //             text: 'home'
    //         },
    //         {
    //             id: 2,
    //             path: '/About',
    //             text: 'about'
    //         },
    //         {
    //             id: 3,
    //             path: '/Projects',
    //             text: 'projects'
    //         },
    //         {
    //             id: 4,
    //             path: '/contact',
    //             text: 'contact'
    //         }
    //     ]
    // }


    // navbarHandler = () =>{
    //     this.state.navbarOpen?this.setState({navbarOpen:false, css:"collapse navbar-collapse"}): this.setState({navbarOpen: true, css:"collapse navbar-collapse show"})
    // }

    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" onClick = {this.navbarHandler}>
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.css}>
                        <ul className="navbar-nav max-auto">
                            {this.state.links.map(link => {
                                return(
                                <li key={link.id} className="nav-item">
                                    <Link to={link.path} className="nav-link text-capitalize">{link.text}</Link>
                                </li>
                                )
                            })}
                            <li className="nav-item ml-sm-5">
                                <FaHome className="home-icon"/>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="#">Irabi's Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        </ul>
                        
                    </div>
                    </nav>
            </div>
        )
    }
}
export default Navbar 