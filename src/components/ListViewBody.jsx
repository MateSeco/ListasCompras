import React from "react";
import { useDispatch} from "react-redux"
import { removeItem, purchaseItem}  from "../Redux/Actions/ListActions"

export default function ListViewBody({items}) {
  const dispatch = useDispatch();
  const purchased = items.filter(item => item.purchased);
  const notPurchased = items.filter(item => !item.purchased);

  return (
    <ul className="list">
      {notPurchased.map((item) => (
        <div key={item.name} className="d-flex">
          <li className="notPurchased">          
            <i className="far fa-square" onClick={() => dispatch(purchaseItem(item.name))}></i>
            <span>{item.name}</span>
            <i className="fas fa-minus-circle" onClick={() => dispatch(removeItem(item.name))}></i>   
          </li>
        </div>
      ))}
      {purchased.map((item) => (
        <div key={item.name} className="d-flex">
        <li className="purchased">
          <i className="fas fa-check"></i>
          <span><s>{item.name}</s></span>
          <i className="fas fa-minus-circle"></i> 
        </li>
        </div>
      ))}
    </ul>
  );
}
