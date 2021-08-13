import "./Menu.css"
import React from "react"

import { Link } from "react-router-dom"

class Menu extends React.Component {
    render() {
        return (
            <aside style={{ ...this.props.style }} className="Menu">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/param/:id">Param #01</Link></li>
                        <li><Link to="/param/123">Param #02</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Menu