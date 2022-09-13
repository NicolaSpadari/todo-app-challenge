<li>
    <div class="flex justify-between py-3">
        <div>
            <p class='text-gray-800 text-lg font-medium {todo.completed ? "line-through text-gray-400" : ""}'>
                { todo.text }
            </p>
        </div>
        <div class="space-x-5">
            <label class="relative w-24 h-8 cursor-pointer" for="{todo.id}">
                <input type="checkbox" id="{todo.id}" on:change={() => checkTodo(todo.id, event)} bind:checked="{todo.completed}" class="sr-only peer" />
                <span class="absolute right-0 w-10 h-6 bg-gray-200 rounded-full transition peer-checked:bg-green-500" />
                <span class="absolute right-0 w-4 h-4 m-1 bg-white rounded-full transition -translate-x-4 peer-checked:translate-x-0" />
            </label>

            <button class="group" on:click="{() => deleteTodo(todo.id)}">
                <Icon src="{Trash}" theme="outline" class="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors duration-500" />
            </button>
        </div>
    </div>
</li>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Trash } from "@steeze-ui/heroicons";
    import type { Todo as T } from "../types";

    export let todo: T;

    const dispatch = createEventDispatcher();

    const deleteTodo = (todoId: string) => {
        dispatch("delete", {
            id: todoId
        })
    }

    const checkTodo = (todoId: string, e: any) => {
        dispatch("check", {
            id: todoId,
            completed: e.target.checked
        });
    }
</script>