import React from "react";
import {useSelector} from "react-redux"
import { useLocation } from "react-router-dom";
import ListViewHeader from "./ListViewHeader"
import ListViewBody from "./ListViewBody"
import "./ListView.component.css";

export default function ListView() {
    const state = useSelector(state => state);
    const listId = Number(useLocation().pathname.replace("/lista/","")); 
    const listIndex = state.lists.findIndex(list => list.id === listId);
    const listName = state.lists[listIndex].name;
    const items = state.list.filter(item => item.list_id === listId);
    

    return(
        <>
            <div className="container" >
                <div className="boxContainer">
                <div className="listContainer" style={{backgroundColor:`${state.lists[listIndex].color}`}}>            
                    <ListViewHeader items={items} listId={listId} listName={listName} />               
                    <ListViewBody  items={items} />               
                </div>
                </div>
            </div>
        </>
    )
}