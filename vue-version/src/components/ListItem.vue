<template>
    <li>
        <div flex justify-between py-3>
            <div>
                <p text-gray-800 text-lg font-medium :class="props.todo.completed ? 'line-through text-gray-400': ''">
                    {{ props.todo.text }}
                </p>
            </div>
            <div space-x-5>
                <label :for="props.todo.id" relative w-24 h-8 cursor-pointer>
                    <input type="checkbox" :id="props.todo.id" v-model="props.todo.completed" sr-only class="peer" />
                    <span absolute right-0 w-10 h-6 bg-gray-200 rounded-full transition peer-checked="bg-green-500" />
                    <span absolute right-0 w-4 h-4 m-1 bg-white rounded-full transition translate-x--4 peer-checked="translate-x-0" />
                </label>

                <button i-heroicons-outline-trash w-6 h-6 text-gray-400 hover="text-red-400" transition-colors duration-500 @click="emit('delete')" />
            </div>
        </div>
    </li>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        todo: Todo
    }>();

    const emit = defineEmits(["delete"]);
</script>