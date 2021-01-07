import React from "react";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import {addList} from "../Redux/Actions/ListsActions"
import {useHistory} from "react-router-dom"
import "./CreateList.component.css";
import {capitalize} from "../Utilities/FuncionesAux"

export default function CreateList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [listName, setListName] = useState("")
    const items = useSelector(state => state.lists); 
    const listId = items.length + 1;   

    return(
        <>
            <form className="createList" onSubmit={ (event) => {
                                    event.preventDefault();
                                    dispatch(addList(listId,  capitalize(listName)));
                                    setListName("");
                                    history.push("/")
                }}>
                <h1>Crear nueva Lista</h1>
                <input type="text" placeholder="Nombre de la lista" onChange={e => setListName(e.target.value)} />
                <button type="submit">                      
                    Agregar
                </button>
            </form>
            
        </>
    )
}