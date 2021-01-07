import React from "react";
import {Link} from "react-router-dom"

export default function ListLink({list, purchased}) {

    return(
        <>
           <Link to={`lista/${list.id}`} className="listLink" style={{backgroundColor:`${list.color}`}}> 
                <button className="listLinkBut" style={{backgroundColor:`${list.color}`}}>
                    <div className="d-flex flex-column">
                        <span className="titulo">{list.name}</span>
                        <span className="fecha">Creada: {list.created}</span>
                    </div>
                    <div >
                        <span className="titulo">{purchased[0]}/{purchased[1]}</span>
                    </div>            
                </button>
            </Link>
            
        </>
    )
}