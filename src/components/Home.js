import React, { useState, useEffect } from "react";
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
    // console.log(todoId);
    const filterArray = todoArray.filter((each) => each.id !== todoId);
    todoArraySetter(filterArray);
  };

  const addTodo = () => {
    const last = userInput.trim().split(" ");
    console.log(last);
    let newObject = {
      id: uuidv4(),
      todoText: userInput,
      editedCount: 0,
      isShowInput: false,
      backgroundColor: getRandomTailwindBg(),
    };
    const numberOdAddOns = last[last.length - 1];
    console.log(typeof parseInt(numberOdAddOns));
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
      console.log(newObjectAdd);
      todoArraySetter((prev) => [...prev, ...newObjectAdd]);
    } else {
      console.log("came hre");
      todoArraySetter((prev) => [...prev, newObject]);
    }

    inputSetter("");
    // let newObject
  };

  const toggleInput = (todoId) => {
    // console.log(todoId);
    const filterArray = todoArray.map((each) => {
      if (each.id === todoId) {
        return { ...each, isShowInput: !each.isShowInput };
      } else {
        return { ...each };
      }
    });
    console.log(filterArray);
    todoArraySetter(filterArray);
  };

  const onChangeInput = (todoId, changeText) => {
    console.log("onChange", todoId, changeText);
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
    <div className="h-[1200px] flex flex-col items-center py-10 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-black flex flex-col items-center px-10 w-3/4 rounded-lg p-8 min-h-[800px]">
        <h1 className="text-white text-3xl">What's Plan for Today ?</h1>
        <div className="w-[40%] justify-between items-center flex  border-2 h-20 my-3 border-blue-500 rounded-lg">
          <input
            value={userInput}
            onChange={(e) => inputSetter(e.target.value)}
            type="text"
            placeholder="Add a todo"
            className="bg-transparent placeholder:px-3 h-[100%] w-3/4 text-white px-3 text-2xl"
          />
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-[100%] p-3 w-1/4"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
        <ul className="w-[80%] flex items-center flex-col overflow-y-auto h-[100%] p-30">
          {todoArray.map((eachTodo, index) => (
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
