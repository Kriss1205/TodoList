import React, { useEffect, useState } from "react";
import Item from "./Item.jsx";
import { ItemLeft } from "./ItemLeft.jsx";

export const Input = () => {
 
  const [list, addToList] = useState([]);
  const [id, setId] = useState(1);

  const url = "https://assets.breatheco.de/apis/fake/todos/user/Kriss1205";

  useEffect(() => {

    function getFetch() {
        return fetch(url)
        .then(response => {
            if(!response.ok){
                console.log('response from GET is not OK')
                throw Error(response.statusText);
            }
            console.log(response.json())
            return response.json();
            
        })
        .catch((error) => {
            console.log("There was a problem doing GET ", error);
            
        })
    }

    function postFetch() {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log("Response from POST is not OK");
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          console.log("There was a problem doing POST ", error);
        });
    }

    const getUserList = async() => {
        let userList = []
        let getFetchResult = await getFetch()
        if (getFetchResult === false){
            await postFetch()
        } else{
            userList = getFetchResult
        }
        addToList(userList)
    }
    getUserList()

  }, []);

//   var itemsLeftNumber = list.length;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const item = {
        id: id,
        string: inputValue,
      };
      addToList([...list, item]);
      setInputValue("");
      setId((id) => id + 1);
      console.log(list);
    }

    const handleRemoveButton = () => {
        handleAddToList(list.filter(item => item.id !== toDo.id))
    }


  };

const listOfTodos = list.map((task, index) => {
    return 
    <li
    key = {index}
    >{task.label}</li>
})

  return (
    <div>
      
      <div>
       
            <Item
              list={list}
              url={url}
              handleAddToList={(value) => addToList(value)}
            />
         {
        
         }
      </div>
    
    </div>
  );
};
