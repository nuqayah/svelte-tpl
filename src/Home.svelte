<div class={isDarkMode ? 'dark' : ''}>
    <div class="bg-background text-foreground min-h-dvh antialiased" transition:fade>
        <Nav {isDarkMode} {toggleDarkMode} />

        <main class="flex flex-col">
            <Hero />

            <Features />

            <DemoShowcase />
        </main>

        <Footer />
    </div>
</div>

<script>
// Import layout components
import {fade} from 'svelte/transition'

import DemoShowcase from './components/demo-showcase.svelte'
import Features from './components/feature/features.svelte'
import Footer from './components/footer.svelte'
import Hero from './components/hero/hero.svelte'
import Nav from './components/nav/nav.svelte'

// Dark mode state
let isDarkMode = $state(false)

// Toggle dark mode
const toggleDarkMode = () => {
    isDarkMode = !isDarkMode
}
</script>
