<div class="space-y-2 mt-15">
    <div class="flex space-x-2">
        <label class="flex-1 relative block py-3 px-5 border-2 border-gray-200 rounded-lg bg-white">
            <input
                class="w-full px-0 pb-0 text-lg border-none outline-none focus:ring-0"
                id="name"
                type="text"
                placeholder="Type something"
                on:input={handleInput}
                value={newTodo}
            />
        </label>

        <button type="button" on:click="{addTodo}" class="py-3 px-5 text-lg font-medium text-dark-800 bg-white border border-white rounded-lg focus:outline-none focus:ring">
            Add
        </button>
    </div>

    <ul class="bg-white rounded-lg divide-y divide-y-gray-300 py-3 px-5">
        {#each todos as todo (todo.id)}
            <ListItem todo={todo} on:delete={deleteTodo} on:check={checkTodo}/>
        {/each}
    </ul>
</div>

<script lang="ts">
    import ListItem from "./ListItem.svelte"
    import { v4 as uuidv4 } from "uuid";
    import { onMount } from "svelte";
    import type { Todo } from "../types"

    let todos = [] as Todo[];
    let newTodo = "";

    onMount(() => {
        if(localStorage.getItem("todos") !== null){
            todos = JSON.parse(localStorage.getItem("todos"));
        }
    });    

    const handleInput = (e) => {
        newTodo = e.target.value;
    }

    const saveTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = () => {
        todos.push({
            id: uuidv4(),
            text: newTodo,
            completed: false
        });

        newTodo = "";

        saveTodos();
    }

    const checkTodo = (e: any) => {
        todos.find((todo) => todo.id === e.detail.id).completed = e.detail.completed;
        saveTodos();
    }

    const deleteTodo = (e: any) => {
        todos = todos.filter((todo: Todo) => todo.id !== e.detail.id);
        saveTodos();
    }
</script>