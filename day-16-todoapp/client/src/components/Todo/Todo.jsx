import { useEffect, useRef, useState } from "react";
import "../Todo/Todo.css";
import { BsFillPencilFill, BsFillTrash3Fill, BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { postAPI } from "./api";

const API_URL = "https://mern-2023-nhff.vercel.app/api/todo";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodeId] = useState("");
  const inputRef = useRef(null);
  const inputEditRef = useRef(null);
  const todoListRef = useRef(null);
  const [itemLeft, setItemLeft] = useState();

  const fetchTodo = async () => {
    try {
      const response = await axios(API_URL);
      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    let count = todoList.filter((item) => item.isCompleted == false).length;
    setItemLeft(count);
  }, [todoList]);

  const handleAddTodo = async () => {
    if (newTodo) {
      try {
        const response = await postAPI("POST", {
          todo: newTodo,
        });

        setTodoList(response.data);
        setNewTodo("");

        todoListRef.current.scrollTo({ top: 0, behavior: "smooth" });
        inputRef.current.focus();
      } catch (error) {
        console.log(error.response.data.message);
      }
    } else {
      alert("An empty world is impossible!");
    }
  };

  const todoIsCompleted = (id) => {
    const newlist = todoList.map((item) => {
      if (item.id == id) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return { ...item };
      }
    });
    setTodoList(newlist);
    localStorage.setItem("TFR-TODO", JSON.stringify(newlist));
  };

  const todoDelete = async (id) => {
    try {
      const response = await postAPI("DELETE", {
        id: id,
      });
      setTodoList(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleTodoEdit = (id) => {
    setEditTodeId(id);
    const editTodoList = [...todoList];
    const index = editTodoList.findIndex((obj) => obj.id == id);
    setEditTodo(editTodoList[index].todo);
    setTimeout(() => inputEditRef.current.focus(), 0);
  };

  const updateTodo = async () => {
    if (editTodo) {
      try {
        const response = await axios(API_URL, {
          method: "PUT",
          data: {
            id: editTodoId,
            todo: editTodo,
            isCompleted: false,
          },
        });
        setTodoList(response.data);
        setEditTodeId("");
      } catch (error) {
        console.log(error.response.data.message);
      }
    } else alert("An empty world is impossible!..");
  };

  return (
    <div className="todo-container">
      <div className="main-container">
        <div className="todo">
          <div className="todo-title">
            <p>Todo List</p>
          </div>
          <div className="todo-add">
            <div className="add-input">
              <input
                type="text"
                placeholder="What needs to be done?"
                name="addnew"
                id=""
                ref={inputRef}
                value={newTodo}
                onChange={() => setNewTodo(event.target.value)}
              />
              {newTodo && (
                <span>
                  <IoIosClose
                    className="clear-icon"
                    onClick={() => {
                      setNewTodo("");
                      inputRef.current.focus();
                    }}
                  />
                </span>
              )}
            </div>
            <button onClick={() => handleAddTodo()}>ADD TODO</button>
          </div>
          <div className="todo-list" ref={todoListRef}>
            {todoList?.map((item) => (
              <div key={item.id} className="todo-item">
                {editTodoId != "" && editTodoId === item.id ? (
                  <div className="edit-todo">
                    <div className="edit-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        ref={inputEditRef}
                        value={editTodo}
                        onChange={() => setEditTodo(event.target.value)}
                      />
                      {editTodo && (
                        <span>
                          <IoIosClose
                            className="clear-icon"
                            onClick={() => {
                              setEditTodo("");
                              setTimeout(() => inputEditRef.current.focus(), 0);
                            }}
                          />
                        </span>
                      )}
                    </div>
                    <div className="edit-action">
                      <button onClick={() => updateTodo(item.id)}>Save</button>
                      <button
                        className="btn-cancel"
                        onClick={() => setEditTodeId("")}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="todo-name"
                      onClick={() => todoIsCompleted(item.id)}
                    >
                      <span>
                        {!item.isCompleted ? (
                          <BsCircle className="uncheck-icon" />
                        ) : (
                          <AiOutlineCheckCircle className="check-icon" />
                        )}
                      </span>
                      <p
                        className={
                          item.isCompleted
                            ? "item-title item-completed"
                            : "item-title"
                        }
                      >
                        {item.todo}
                      </p>
                    </div>
                    <div className="item-action">
                      <BsFillPencilFill
                        className="action-edit"
                        onClick={() => handleTodoEdit(item.id)}
                      />
                      <BsFillTrash3Fill
                        className="action-delete"
                        onClick={() => todoDelete(item.id)}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
