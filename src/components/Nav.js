import { Link } from "react-router-dom"
import React from "react"
export default function Navigation() {
    return (
        <>
            <nav className="nav-bg">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/todos" className="nav-link">Todos</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Contact</a>
                    </li>
                </ul>
            </nav>


        </>
    )
}