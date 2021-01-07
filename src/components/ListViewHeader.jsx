import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {removeList}  from "../Redux/Actions/ListsActions"
import {removeItem}  from "../Redux/Actions/ListActions"
import SearchBar from "./SearchBar"

export default function ListViewHeader({items, listId, listName}) {
    const [newItem, setNewItem] = useState("")
    const dispatch = useDispatch();

/*     const lista = ["Puerro, Frutilla, Sandia"]; */

    return(
        <>
        <div className="header">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            <span>{listName}</span>       
                <Link to="/" onClick={() => {
                    dispatch(removeList(listId));
                    items.map(item => dispatch(removeItem(item.name)))                
                }} >
            <i className="fas fa-minus-circle"></i></Link>        
        </div>
        <div className="searchBar">
            <SearchBar newItem={newItem} setNewItem={setNewItem} listId={listId}/>
        </div>
        
        
        </>
    )
}