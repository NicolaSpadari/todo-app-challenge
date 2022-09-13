<route>
{
    name: "Home"
}
</route>

<template>
    <div crate>
        <p text-white text-3xl lg="text-7xl" font-bold>
            Todo list
        </p>

        <List mt-15 />
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();

    useHead({
        title: String(route.name),
        meta: [
            {
                name: "description",
                content: "Homepage description"
            }
        ]
    });
</script>
