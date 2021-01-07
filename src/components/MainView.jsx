import React from "react";
import ListLink from "./ListLink"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import "./MainView.component.css";


export default function MainView() {
    const state = useSelector(state => state);
    const lists = state.lists;
    const items = state.list;

function purchasedItems (items, list) {
        const listItems =  items.filter((item) => item.list_id === list.id);
        const purchasedListItems = listItems.filter(item => item.purchased);
        return [purchasedListItems.length, listItems.length]
    }

    return(
        <div className="mainContainer">
             <h1>Mis listas de compras</h1>
             <div>
             <ul className="w-100">
                {lists.map(list => 
                
                    <li key={list.name}>
                        <ListLink list={list} purchased={purchasedItems(items, list)} />
                    </li>
                )}
            </ul> 
             </div>
            <Link to="/crear-lista"><i className="fas fa-plus-circle"></i></Link>
        </div>
    )
}