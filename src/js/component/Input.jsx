import React, { useEffect, useState } from "react";
import Item from "./Item.jsx";

export const Input = () => {
  const [list, addToList] = useState([]);

  const url =
    "https://assets.breatheco.de/apis/fake/todos/user/TheRhettThompson";

  useEffect(() => {
    function getFetch() {
      return fetch(url)
        .then((response) => {
          if (!response.ok) {
            console.log("response from GET is not OK");
            throw Error(response.statusText);
          }

          return response.json();
        })

        .catch((error) => {
          console.log("There was a problem doing GET", error);
        });
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

    const getUserList = async () => {
      let userList = [];
      let getFetchResult = await getFetch();
      if (getFetchResult === false) {
        await postFetch();
      } else {
        userList = getFetchResult;
      }
      addToList(userList);
    };
    getUserList();
  }, []);

  const deleteTask = (index) => {
    const newListOfToDos = list.filter((_, id) => id !== index);
    addToList(newListOfToDos);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newListOfToDos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Response from PUT is not OK");
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.log("There was a problem doing PUT ", error);
      });
  };

  const listOfToDos = list.map((task, index) => {
    return (
      <li key={index}>
        {task.label}
        <button id={index} onClick={() => deleteTask(index)}>
        {/* 🚫 Icon for delete button */}
        🚫
        </button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <ul>
          <Item
            list={list}
            url={url}
            handleAddToList={(value) => addToList(value)}
          />
          {listOfToDos}
          <li>{list.length} items left</li>
        </ul>
      </div>
    </div>
  );
};