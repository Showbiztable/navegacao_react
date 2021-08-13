import "./App.css"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Menu from "../components/layout/Menu"
import Content from "../components/layout/Content"

const App = (props) => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu style={{ order: 2 }} />
                <Content style={{ order: 1 }} />
            </BrowserRouter>
        </div>
    )
}

export default App