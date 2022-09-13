<template>
    <nav flex justify-between px-5 py-3>
        <div flex space-x-10>
            <a href="#" text-gray-400 space-x-2>
                <i-heroicons-solid-external-link w-6 h-6 />
                <span align-middle text-lg>Source</span>
            </a>
            <a href="#" text-gray-400 space-x-2>
                <i-heroicons-solid-external-link w-6 h-6 />
                <span align-middle text-lg>Hosted on Netlify</span>
            </a>
        </div>
        <div flex space-x-3>            
            <div flex items-center space-x-10>
                <button i-heroicons-outline-sun text-gray-400 w-6 h-6 />
                <a href="#" text-gray-400 align-middle text-lg>
                    Logout
                </a>
            </div>
        </div>
    </nav>
</template>