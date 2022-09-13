<template>
    <div flex flex-col min-h-screen>
        <Navbar />
        <PageWrapper>
            <router-view v-slot="{ Component }">
                <Suspense>
                    <component :is="Component" />
                </Suspense>
            </router-view>
        </PageWrapper>        
    </div>
</template>

<style lang="scss">
    html {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
    body {
        @apply overflow-x-hidden bg-dark-800 font-sans;
    }
    img {
        -webkit-user-drag: none;
        @apply select-none;
    }
    [container] {
        @apply mx-auto;
    }
</style>
