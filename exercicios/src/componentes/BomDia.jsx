import React from "react";

export default props => 
    <div>
        <h1>Bom dia, {props.nome}, {props.idade}, {props.profissao}!</h1>
        <h2>Até breve!</h2>
    </div>

// export default props => [
//     <h1 key="1">Bom dia, {props.nome}, {props.idade}, {props.profissao}!</h1>,
//     <h2 key="2">Até breve!</h2>
// ]

// export default props => 
// <Fragment>
//     <h1>Bom dia, {props.nome}, {props.idade}, {props.profissao}!</h1>
//     <h2>Até breve!</h2>
// </Fragment>