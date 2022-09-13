<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import List from "./lib/List.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Navbar />

    <div class='grid flex-1 place-content-center'>
        <div class="crate">
            <p class="text-white text-3xl lg:text-7xl font-bold">
                Todo list
            </p>

            <List />
        </div>
    </div>
</div>