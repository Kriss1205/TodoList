import React, { useState } from "react";

const Item = ({ list, handleAddToList, url }) => {
  const [inputValue, setInputValue] = useState("");
  const newItem = (value) => {
    return {
      label: value,
      done: false,
    };
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      const item = newItem(inputValue);
      const newToDoList = [...list, item];
      handleAddToList(newToDoList);

      fetch(url, {
        method: "PUT",
        body: JSON.stringify(newToDoList),
        headers: {
          "Content-Type": "application/json",
        }

      })
        .then((response) => {
          console.log(response.status);
          return response;
        })

        .catch((error) => {
          console.log(error);
        });

      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      onChange={e => setInputValue(e.target.value)}
      value={inputValue}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Item;