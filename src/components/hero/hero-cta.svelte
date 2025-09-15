<div class="flex flex-wrap items-center justify-center gap-4">
    <Button
        size="lg"
        class="h-12 bg-linear-to-r from-primary to-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-primary/20"
    >
        <RocketIcon class="mr-2 size-5" />
        Get Started
    </Button>
    <Button
        size="lg"
        variant="outline"
        class="h-12 border-2 transition-all duration-300 hover:bg-primary/5"
    >
        <div class="mr-2 size-5 fill-[#181717] dark:fill-[#ffffff]">
            {@html siGithub.svg}
        </div>
        Star on GitHub
    </Button>
    <Button size="lg" variant="ghost" class="h-12 transition-all duration-300 hover:bg-muted/50">
        <BookOpenIcon class="mr-2 size-5" />
        Documentation
    </Button>
</div>

<script>
import {BookOpenIcon, RocketIcon} from '@lucide/svelte'
import {siGithub} from 'simple-icons'

import {Button} from '$ui/button/index.js'
</script>
