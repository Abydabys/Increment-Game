import {Link} from 'react-router-dom'
import './Header.css'

export function Header(){
    return (
        <header className="site-header">
            <div className="header-logo">
                <Link to="/">INCREMENT GAME</Link>
            </div>
            <nav className="nav-menu">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/upgrade" className="nav-link">UPGRADES</Link>
            </nav>
        </header>
    )
}