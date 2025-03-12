<section id="hero" class="relative overflow-hidden py-24 md:py-32">
    <div class="bg-grid-pattern absolute inset-0 opacity-5"></div>
    <div class="from-primary/5 absolute inset-0 bg-gradient-to-b to-transparent"></div>

    <div class="relative z-10 container">
        <div class="flex flex-col items-center gap-8 text-center">
            <div in:fly={{y: 50, duration: 500, delay: 200}}>
                <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Build Beautiful UIs with <span
                        class="from-primary to-primary-foreground bg-gradient-to-r bg-clip-text text-transparent"
                        >Svelte</span
                    >
                </h1>
                <p class="text-muted-foreground mx-auto mt-6 max-w-[700px] text-lg md:text-xl">
                    Create stunning web applications using Svelte 5, shadcn-svelte, and Tailwind CSS
                    4. Fast, responsive, and beautiful by default.
                </p>
            </div>

            <div in:fade={{delay: 700}}>
                <HeroCTA />
            </div>

            <div
                class="bg-card/50 mt-12 w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl backdrop-blur-sm"
                in:fade={{delay: 900}}
            >
                <div class="relative">
                    <div
                        class="bg-muted absolute top-0 right-0 left-0 flex h-8 items-center space-x-2 px-4"
                    >
                        <div class="h-3 w-3 rounded-full bg-red-500"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div class="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <pre class="language-svelte overflow-x-auto p-4 pt-12 text-sm">
                        <code class="language-svelte">{codeExample}</code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
import {fade, fly} from 'svelte/transition'

import HeroCTA from './hero-cta.svelte'

// Code example to display
const codeExample = `                                                                        <script>
                                       import { Button } from "$lib/components/ui/button/index.js"
                                                                                              </ script>
                                                                                <Button>Button</Button>`
</script>

<style>
.bg-grid-pattern {
    background-image:
        linear-gradient(to right, rgba(var(--foreground-rgb), 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(var(--foreground-rgb), 0.1) 1px, transparent 1px);
    background-size: 24px 24px;
}
</style>
