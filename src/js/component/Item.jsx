import React from "react";

export const Item = (props) => {

    const removeItem = () => {
        // write function to remove item from 'list' array
    }

    return (
        <div className="todoitem">

        <p >{props.input}</p>
        <button
        // when user clicks button, the 'removeItem' function is called, and the item is removed from the array
        onClick={() => {removeItem()}}
        >
        Delete
        </button>
        </div>

    )
}