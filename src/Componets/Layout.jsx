import {Outlet} from 'react-router-dom'
import {Header} from './Header'
import './Layout.css'

export function Layout(){
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}