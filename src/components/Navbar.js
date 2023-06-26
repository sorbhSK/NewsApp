import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
            <div className='container-fluid '>
                <Link className="navbar-brand" to="/">News Monkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/business">BUSINESS </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/entertainment">ENTERTAINMENT </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/general">GENERAL </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/health">HEALTH </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/science">SCIENCE</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/sports">SPORTS</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/technology">TECHNOLOGY</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
  }
}
