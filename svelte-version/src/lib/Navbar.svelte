<nav class="flex justify-between px-5 py-3">
    <div class="flex space-x-10">
        <a href="#" class="text-gray-400 space-x-2">
            <Icon src="{ArrowTopRightOnSquare}" theme="outline" class="inline w-6 h-6" />
            <span class="align-middle text-lg">Source</span>
        </a>
        <a href="#" class="text-gray-400 space-x-2">
            <Icon src="{ArrowTopRightOnSquare}" theme="outline" class="inline w-6 h-6" />
            <span class="align-middle text-lg">Hosted on Netlify</span>
        </a>
    </div>
    <div class="flex space-x-3">            
        <div class="flex items-center space-x-10">
            <button class="text-gray-400">
                <Icon src="{Sun}" theme="outline" class="inline w-6 h-6" />
            </button>
            <a href="#" class="text-gray-400 align-middle text-lg">
                Logout
            </a>
        </div>
    </div>
</nav>

<script lang="ts">
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowTopRightOnSquare, Sun } from "@steeze-ui/heroicons";
</script>