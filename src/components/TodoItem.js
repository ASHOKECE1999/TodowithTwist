import React, { useRef } from "react";
import { getRandomTailwindBg } from "../constants/constants";

const TodoItem = (props) => {
  const changeText = useRef(null);
  const { deleteTodo, todoData, toggleInputParent, changeInput } = props;
  const { id, todoText, editedCount, isShowInput, backgroundColor } = todoData;

  const sendDeletedItemData = (id) => deleteTodo(id);

  const toggleInput = (id) => {
    toggleInputParent(id);
  };

  const addInputFromUser = (id) => {
    changeInput(id, changeText.current.value);
    changeText.current.value = null;
  };

  return (
    <li
      className={`${backgroundColor} text-lg sm:text-2xl my-2 p-3 w-full sm:w-[80%] text-white font-bold flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-3 rounded-lg`}
    >
      {isShowInput ? (
        <input
          ref={changeText}
          type="text"
          className="w-full sm:w-3/4 h-[40px] bg-transparent rounded-md border-2 px-2 text-lg sm:text-2xl"
        />
      ) : (
        <h1 className="w-full sm:w-[50%] text-center sm:text-left">
          {todoText}( Updated {editedCount} Times)
        </h1>
      )}
      <div className="flex gap-3">
        {!isShowInput ? (
          <button
            className="hover:bg-slate-600 px-2 py-1 rounded"
            onClick={() => toggleInput(id)}
          >
            📝
          </button>
        ) : (
          <button
            className="hover:bg-slate-600 px-2 py-1 rounded"
            onClick={() => addInputFromUser(id)}
          >
            ➕
          </button>
        )}

        <button
          className="hover:bg-slate-600 px-2 py-1 rounded"
          onClick={() => sendDeletedItemData(id)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
