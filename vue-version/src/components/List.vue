<template>
    <div space-y-2>
        <div flex space-x-2>
            <label flex-1 relative block py-3 px-5 border-2 border-gray-200 rounded-lg bg-white for="name">
                <input
                    w-full px-0 pt-3.5 pb-0 text-lg border-none outline-none focus="ring-0"
                    id="name"
                    type="text"
                    placeholder="Type something"
                    v-model="newTodo"
                    @key-up.enter="addTodo()"
                />
            </label>

            <button type="button" @click="addTodo()" py-3 px-5 text-lg font-medium text-dark-800 bg-white border border-white rounded-lg focus="outline-none ring">
                Add
            </button>
        </div>

        <ul bg-white rounded-lg divide-y deivide-y-gray-300 py-3 px-5>
            <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete="deleteTodo(todo.id)" />
        </ul>
    </div>
</template>

<script lang="ts" setup>
    const todos = useLocalStorage<Todo[]>("todos", []);

    const newTodo = ref("");

    const addTodo = () => {
        todos.value.push({
            id: uuidv4(),
            text: newTodo.value,
            completed: false
        });

        newTodo.value = "";
    }

    const deleteTodo = (id: string) => {
        todos.value = todos.value.filter((todo: Todo) => todo.id !== id)
    }
</script>