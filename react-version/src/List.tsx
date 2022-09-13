import ListItem from "./ListItem"
import type { Todo } from "./types";
import useLocalStorage from "./useLocalStorage";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = () => {
    const [todos, setTodos] = useLocalStorage("todos", [] as Todo[]);
    const [value, setValue] = useState("");

    const handleInput = (e: any) => {
        setValue(e.target.value);
    }

    const handleCheck = (id: string, e: any) => {        
        todos.find((todo: Todo) => todo.id === id)!.completed = e.target.checked;
        setTodos(todos);
    }

    const handleDelete = (id: string) => {
        setTodos(todos.filter((todo: Todo) => todo.id !== id));
    }

    const addTodo = () => {
        const newTodo: Todo = {
            id: uuidv4(),
            text: value,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    return (
        <div className="space-y-2 mt-15">
            <div className="flex space-x-2">
                <label className="flex-1 relative block py-3 px-5 border-2 border-gray-200 rounded-lg bg-white">
                    <input
                        className="w-full px-0 pb-0 text-lg border-none outline-none focus:ring-0"
                        id="name"
                        type="text"
                        placeholder="Type something"
                        onChange={handleInput}
                    />
                </label>

                <button type="button" onClick={addTodo} className="py-3 px-5 text-lg font-medium text-dark-800 bg-white border border-white rounded-lg focus:outline-none focus:ring">
                    Add
                </button>
            </div>

            <ul className="bg-white rounded-lg divide-y divide-y-gray-300 py-3 px-5">
                {todos.map((todo: Todo) => (
                    <ListItem key={todo.id} todo={todo} check={handleCheck} del={handleDelete} />
                ))}
            </ul>
        </div>
    )
}

export default List;