import "./Content.css"
import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../../views/examples/Home.jsx"
import About from "../../views/examples/About.jsx"
import Param from "../../views/examples/Param.jsx"
import NotFound from "../../views/examples/NotFound"

class Content extends React.Component {

    render() {
        return (
            <main style={{...this.props.style}} className="Content">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/param/:id">
                        <Param />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Content