import React from "react";
import PropTypes from "prop-types";

const Item = ({toDo, list, handleAddToList}) => {

    const handleRemoveButton = () => {
        handleAddToList(list.filter(item => item.id !== toDo.id))
    }

    return (
        <div className="todoitem">
            <div>
            {toDo.string} 
            
            <button 
            onClick={handleRemoveButton} 
            type="button" 
            aria-label="Close">
                Delete
            </button>
        </div>
        </div>

    )
}

Item.propTypes = {
    toDo:PropTypes.object,
    list:PropTypes.array,
    handleAddToList:PropTypes.func
}


export default Item