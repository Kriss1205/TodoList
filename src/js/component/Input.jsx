import React, { useState } from "react";
import Item from "./Item.jsx";
import { ItemLeft } from "./ItemLeft.jsx";


export const Input = () => {

    const [inputValue, setInputValue] = useState("");
    const [list, addToList] = useState([]);
    const [id, setId] = useState(1);

    var itemsLeftNumber = list.length;

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
             const item = {
                 id: id,
                 string: inputValue
             }
            addToList([...list, item])
            setInputValue("")
            setId(id => id +1)
            console.log(list);
        }
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={e => setInputValue(e.target.value)} 
            value={inputValue}
            onKeyDown = {handleKeyDown}
            />
            <div>
                {list.map((toDo) => {
                    return <Item 
                    toDo={toDo} 
                    list={list}
                    key={toDo.id}
                    handleAddToList={inputValue => addToList(inputValue)}
                    />
                    
                })}
            </div>
            <ItemLeft quantity={itemsLeftNumber}/>
        </div>

    )
}