import React, {useState} from "react";
import PropTypes from "prop-types";

const Item = ({list, handleAddToList, url}) => {
    const [inputValue, setInputValue] = useState("");
    const newItem = (value) => {
        return {
            label: value, 
            done: false
        }
    }

    const handleKeyDown = async(e) => {
        if(e.key === 'Enter' && inputValue !== '')
        {
            const item = newItem(inputValue)
            const newTodoList = [...list, item]
            handleAddToList(newTodoList) 

            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(newTodoList),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response.status);
                return response;
            })
            .catch(error => {
                console.log(error)
            })
            
            setInputValue('')
        }
    }

    
    return (
        <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />

    )
}

Item.propTypes = {
    toDo:PropTypes.object,
    list:PropTypes.array,
    handleAddToList:PropTypes.func
}


export default Item