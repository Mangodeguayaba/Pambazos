import React from "react";

const TituloRosa = () => {
    const name = "X";
    return(
        <h1 className="titulo" style={{color: "pink"}}>
            Hola {name}
        </h1>
    );
};

const TituloNaranja = ({alumno, matricula, color}) => {
    return(
        <h1 className="titulo" style={{color: color}}>
            Hola {alumno} con id {matricula}
        </h1>
    );
};
export {TituloRosa, TituloNaranja};
