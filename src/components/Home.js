import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import { getRandomTailwindBg } from "../constants/constants";

const todoData = [
  {
    id: uuidv4(),
    todoText: "Prepare Notes",
    editedCount: 0,
    isShowInput: false,
    backgroundColor: getRandomTailwindBg(),
  },
  {
    id: uuidv4(),
    todoText: "Work on Event loops In javaScript",
    editedCount: 0,
    isShowInput: false,
    backgroundColor: getRandomTailwindBg(),
  },
];

const Home = () => {
  const [userInput, inputSetter] = useState("");
  const [todoArray, todoArraySetter] = useState(todoData);

  const deleteTodo = (todoId) => {
    const filterArray = todoArray.filter((each) => each.id !== todoId);
    todoArraySetter(filterArray);
  };

  const addTodo = () => {
    const last = userInput.trim().split(" ");
    const numberOdAddOns = last[last.length - 1];
    let newObject = {
      id: uuidv4(),
      todoText: userInput,
      editedCount: 0,
      isShowInput: false,
      backgroundColor: getRandomTailwindBg(),
    };

    if (!isNaN(parseInt(numberOdAddOns))) {
      let newObjectAdd = [];
      for (let i = 0; i < parseInt(numberOdAddOns); i++) {
        let newObject1 = {
          id: uuidv4(),
          todoText: userInput,
          editedCount: 0,
          isShowInput: false,
          backgroundColor: getRandomTailwindBg(),
        };
        newObjectAdd.push(newObject1);
      }
      todoArraySetter((prev) => [...prev, ...newObjectAdd]);
    } else {
      todoArraySetter((prev) => [...prev, newObject]);
    }

    inputSetter("");
  };

  const toggleInput = (todoId) => {
    const filterArray = todoArray.map((each) => {
      if (each.id === todoId) {
        return { ...each, isShowInput: !each.isShowInput };
      } else {
        return { ...each };
      }
    });
    todoArraySetter(filterArray);
  };

  const onChangeInput = (todoId, changeText) => {
    const filterArray = todoArray.map((each) => {
      if (each.id === todoId) {
        return {
          ...each,
          isShowInput: !each.isShowInput,
          todoText: changeText,
          editedCount: each.editedCount + 1,
        };
      } else {
        return { ...each };
      }
    });
    todoArraySetter(filterArray);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-black flex flex-col items-center px-4 sm:px-10 w-full sm:w-3/4 rounded-lg py-8 min-h-[800px]">
        <h1 className="text-white text-xl sm:text-3xl text-center mb-4">
          What's Plan for Today?
        </h1>
        <div className="w-full sm:w-[40%] flex flex-col sm:flex-row justify-between items-center border-2 h-auto sm:h-20 my-3 border-blue-500 rounded-lg">
          <input
            value={userInput}
            onChange={(e) => inputSetter(e.target.value)}
            type="text"
            placeholder="Add a todo"
            className="bg-transparent placeholder:px-3 w-full sm:w-3/4 h-[50px] sm:h-full text-white px-3 text-lg sm:text-2xl"
          />
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-[50px] sm:h-full w-full sm:w-1/4 text-lg sm:text-xl"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
        <ul className="w-full sm:w-[80%] flex items-center flex-col overflow-y-auto h-full p-4 sm:p-8 gap-4">
          {todoArray.map((eachTodo) => (
            <TodoItem
              key={eachTodo.id}
              todoData={eachTodo}
              deleteTodo={deleteTodo}
              toggleInputParent={toggleInput}
              changeInput={onChangeInput}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
