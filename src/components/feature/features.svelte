<section id="features" class="relative overflow-hidden py-24">
    <div class="from-background via-muted/30 to-background absolute inset-0 bg-gradient-to-b"></div>
    <div class="relative z-10 container" in:fade={{duration: 500}}>
        <h2 class="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features that Make a <span class="text-primary">Difference</span>
        </h2>
        <p class="text-muted-foreground mx-auto mt-4 max-w-[700px] text-center">
            Everything you need to build modern web applications with Svelte 5 and Tailwind CSS 4.
        </p>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each features as feature, i}
                <div in:fly={{y: 20, duration: 400, delay: 100 * i}}>
                    <FeatureCard {...feature} />
                </div>
            {/each}
        </div>

        <div class="mt-16 flex justify-center">
            <Button size="lg" variant="outline" class="group">
                <span>View All Features</span>
                <ArrowRightIcon
                    class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
            </Button>
        </div>
    </div>
</section>

<script>
import {ArrowRightIcon, BoxesIcon, CodeIcon, PaletteIcon} from 'lucide-svelte'
import {fade, fly} from 'svelte/transition'

import {Button} from '$ui/button/index.js'

import FeatureCard from './feature-card.svelte'

// Feature data
const features = [
    {
        icon: CodeIcon,
        title: 'Modern Development',
        description:
            'Build reactive applications with powerful runes and simplified state management',
        link: 'https://svelte.dev',
    },
    {
        icon: PaletteIcon,
        title: 'Beautiful Design',
        description:
            'Style your application with the latest Tailwind CSS 4 features and optimizations',
        link: 'https://tailwindcss.com/docs',
    },
    {
        icon: BoxesIcon,
        title: 'Component Library',
        description: 'Extensive collection of beautifully designed, accessible UI components',
        link: 'https://next.shadcn-svelte.com/',
    },
]
</script>
