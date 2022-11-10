import React, { useState } from "react";
import { Item } from "./Item.jsx";
import { ItemLeft } from "./ItemLeft.jsx";


export const Input = () => {

    const [inputValue, setInputValue] = useState("");
    const [list, addToList] = useState([]);
    var itemsLeftNumber = list.length;

    return (
        <div>
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={e => setInputValue(e.target.value)} value={inputValue}
            />
            <button
            onClick={() => {addToList([...list, inputValue])}}
            >Add Task
            </button>
            <div>
                {list.map((value, key) => {
                    return <Item input={value} key={key}/>
                    
                })}
            </div>
            <ItemLeft quantity={itemsLeftNumber}/>
        </div>

    )
}