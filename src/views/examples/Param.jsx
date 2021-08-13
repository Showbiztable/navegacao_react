import React from "react"
import { useParams } from "react-router-dom"

const Param = (props) => {
    const { id } = useParams()
    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Exibindo o valor {id === ":id" ? "" : id}</p>
        </div>
    )
}
export default Param

// Utilizando classes tem que usar assim

// import { withRouter } from "react-router"
// class Param extends React.Component {
//     render() {
//         return (
//             <div className="Param">
//                 <h1>Param</h1>
//                 <p>Exibindo o valor {this.props.match.params.id}</p>
//             </div>
//         )
//     }
// }

// export default withRouter(Param)