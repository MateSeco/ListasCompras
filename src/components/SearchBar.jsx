import React from "react"
import { useDispatch} from "react-redux"
import {addItem}  from "../Redux/Actions/ListActions"
import "./SearchBar.component.css";
import {capitalize} from "../Utilities/FuncionesAux"


export default function SearchBar({newItem, setNewItem, listId}) {
    const dispatch = useDispatch();

    return(
        <form className="searchBar" onSubmit={(event) => {
            event.preventDefault()
            dispatch(addItem(capitalize(newItem), Number(listId)));
            setNewItem("")
        }}>
        <input className="input" id="input" type="text" value={newItem} placeholder="Agregar item" onChange={e => setNewItem(e.target.value)} />
        <button type="submit"><i className="fas fa-plus-circle"></i></button>         
        </form>
    )
}