<div class="flex flex-wrap items-center justify-center gap-4">
    <Button
        size="lg"
        class="from-primary to-primary-foreground hover:shadow-primary/20 h-12 bg-gradient-to-r shadow-lg transition-all duration-300 hover:opacity-90"
    >
        <RocketIcon class="mr-2 h-5 w-5" />
        Get Started
    </Button>
    <Button
        size="lg"
        variant="outline"
        class="hover:bg-primary/5 h-12 border-2 transition-all duration-300"
    >
        <GithubIcon class="mr-2 h-5 w-5" />
        Star on GitHub
    </Button>
    <Button size="lg" variant="ghost" class="hover:bg-muted/50 h-12 transition-all duration-300">
        <BookOpenIcon class="mr-2 h-5 w-5" />
        Documentation
    </Button>
</div>

<script>
import {BookOpenIcon, GithubIcon, RocketIcon} from '@lucide/svelte'

import {Button} from '$ui/button/index.js'
</script>
