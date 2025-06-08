import React, { useRef, useState } from "react";
import { getRandomTailwindBg } from "../constants/constants";

const TodoItem = (props) => {
  const changeText = useRef(null);
  const { deleteTodo, todoData, toggleInputParent, changeInput } = props;
  const { id, todoText, editedCount, isShowInput, backgroundColor } = todoData;
  //   console.log(backgroundColor);

  const sendDeletedItemData = (id) => deleteTodo(id);

  const toggleInput = (id) => {
    toggleInputParent(id);
  };

  const addInputFromUser = (id) => {
    changeInput(id, changeText.current.value);
    changeText.current.value = null;

    // toggleInputParent(id);
  };

  return (
    <li
      className={`${backgroundColor} text-2xl my-4 p-3 w-[80%] text-white font-bold flex justify-between items-center px-3 rounded-lg`}
    >
      {isShowInput ? (
        <input
          value={changeText.current}
          ref={changeText}
          type="text"
          className="w-3/4 h-[40px] bg-transparent rounded-md border-2 px-2 text-2xl"
        />
      ) : (
        <h1 className="w-[50%]">
          {todoText}( Updated {editedCount} Times)
        </h1>
      )}
      <div className="flex items-center">
        {!isShowInput ? (
          <button
            className="hover:bg-slate-600 mx-3 "
            onClick={() => toggleInput(id)}
          >
            📝
          </button>
        ) : (
          <button
            className="hover:bg-slate-600 mx-3 "
            onClick={() => addInputFromUser(id)}
          >
            ➕
          </button>
        )}

        <button
          className="hover:bg-slate-600"
          onClick={() => sendDeletedItemData(id)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
