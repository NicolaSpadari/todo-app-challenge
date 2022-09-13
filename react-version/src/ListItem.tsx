import { TrashIcon } from "@heroicons/react/24/outline";
import type { Todo } from "./types";

interface ListItemProps{
    todo: Todo,
    check: (id: string, e: any) => void,
    del: (id: string) => void
}

const ListItem = ({todo, check, del}: ListItemProps) => {
    return (
        <li>
            <div className="flex justify-between py-3">
                <div>
                    <p className={`text-gray-800 text-lg font-medium ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                        {todo.text}
                    </p>
                </div>
                <div className="space-x-5">
                    <label className="relative w-24 h-8 cursor-pointer">
                        <input type="checkbox" id="test" checked={todo.completed} onChange={(e) => check(todo.id, e)} className="sr-only peer" />
                        <span className="absolute right-0 w-10 h-6 bg-gray-200 rounded-full transition peer-checked:bg-green-500" />
                        <span className="absolute right-0 w-4 h-4 m-1 bg-white rounded-full transition -translate-x-4 peer-checked:translate-x-0" />
                    </label>

                    <button className="group" onClick={() => del(todo.id)}>
                        <TrashIcon className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors duration-500" />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ListItem;