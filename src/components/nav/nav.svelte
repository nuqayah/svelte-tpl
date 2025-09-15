<header class="sticky top-0 right-0 left-0 z-50 border-b bg-background/80 backdrop-blur-md">
    <nav class="container flex h-16 items-center justify-between">
        <!-- Logo -->
        <a href="/" class="group flex items-center gap-2">
            <div
                class="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20"
            >
                <img
                    src="/nuqayah.png"
                    alt="Logo"
                    class="size-6 transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <span
                class="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-xl font-bold text-transparent"
                >SvelteUI</span
            >
        </a>

        <!-- Nav links -->
        <div class="hidden md:block">
            <NavLinks />
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center gap-2 md:hidden">
            <Button
                variant="ghost"
                size="icon"
                class="size-9"
                onclick={() => (is_menu_open = !is_menu_open)}
            >
                {#if is_menu_open}
                    <XIcon class="size-5" />
                {:else}
                    <MenuIcon class="size-5" />
                {/if}
            </Button>
        </div>

        <!-- Theme toggle -->
        <div class="hidden md:block">
            <Button
                variant="ghost"
                size="icon"
                class="relative overflow-hidden"
                onclick={toggle_dark_mode}
            >
                <div
                    class="absolute inset-0 rounded-md opacity-20 transition-colors duration-500"
                    class:bg-yellow-400={!is_dark_mode}
                    class:bg-indigo-500={is_dark_mode}
                ></div>
                {#if is_dark_mode}
                    <SunIcon class="size-5 rotate-0 transition-transform duration-500" />
                {:else}
                    <MoonIcon class="size-5 rotate-0 transition-transform duration-500" />
                {/if}
            </Button>
        </div>
    </nav>

    <!-- Mobile menu -->
    {#if is_menu_open}
        <div class="md:hidden" transition:slide={{duration: 200}}>
            <div class="space-y-3 border-b bg-background px-4 py-4">
                <Button variant="ghost" class="w-full justify-start" href="#features"
                    >Features</Button
                >
                <Button variant="ghost" class="w-full justify-start" href="#demo">Demo</Button>
                <Button variant="ghost" class="w-full justify-start" href="#pricing">Pricing</Button
                >
                <Button variant="ghost" class="w-full justify-start" href="#contact">Contact</Button
                >
                <div class="flex items-center justify-between pt-2">
                    <Button class="w-full">Get Started</Button>
                    <Button variant="ghost" size="icon" class="ml-2" onclick={toggle_dark_mode}>
                        {#if is_dark_mode}
                            <SunIcon class="size-5" />
                        {:else}
                            <MoonIcon class="size-5" />
                        {/if}
                    </Button>
                </div>
            </div>
        </div>
    {/if}
</header>

<script>
import {MenuIcon, MoonIcon, SunIcon, XIcon} from '@lucide/svelte'
import {slide} from 'svelte/transition'

import {appstate} from '~/stores.svelte.js'
import {Button} from '$ui/button/index.js'

import NavLinks from './nav-links.svelte'

// Mobile menu state
let is_menu_open = $state(false)
let is_dark_mode = $state(false)

// Initialize dark mode based on appstate
$effect(() => {
    const state = $appstate
    is_dark_mode = state.theme === 'dark'
})

function toggle_dark_mode() {
    appstate.update(state => ({
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
    }))
}
</script>
