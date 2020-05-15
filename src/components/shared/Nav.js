import React, { Component } from 'react'
import {Link} from 'react-router-dom';

 class Nav extends Component {
    render() {
        return (
            <nav ClassName="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div ClassName="container">
            <link ClassName="navbar-brand" to="/">
                Expense Manager
            </link>
            <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span ClassName="navbar-toggler-icon" />
            </button>

            <div ClassName="collapse navbar-collapse" id="mobile-nav">
                <ul ClassName="navbar-nav mr-auto">
                    <li ClassName="nav-item">
                        <Link ClassName="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>

                <ul ClassName="navbar-nav ml-auto">
                    <li ClassName="nav-item">
                        <a ClassName="nav-link " href="register.html">
                            Sign Up
                        </a>
                    </li>
                    <li ClassName="nav-item">
                        <a ClassName="nav-link" href="login.html">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        )
    }
}

export default Nav
