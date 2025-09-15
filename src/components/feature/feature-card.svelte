<Card.Root
    class="group relative overflow-hidden border-none bg-linear-to-br from-background to-muted/50 shadow-md transition-all duration-300 hover:shadow-xl"
>
    <div
        class="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></div>
    <a href={link} target="_blank" rel="noopener noreferrer" class="block">
        <Card.Header class="space-y-2">
            <div
                class="flex size-12 items-center justify-center rounded-full bg-primary/10 p-2 transition-transform duration-300 group-hover:scale-110"
            >
                <Icon class="size-6 text-primary" />
            </div>
            <Card.Title
                class="text-xl font-bold transition-colors duration-300 group-hover:text-primary"
                >{title}</Card.Title
            >
        </Card.Header>
        <Card.Content>
            <p
                class="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90"
            >
                {description}
            </p>
        </Card.Content>
        <Card.Footer class="pt-0 pb-4">
            <span
                class="flex translate-x-2 transform items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
                Learn more <ArrowRightIcon class="ml-1 size-4" />
            </span>
        </Card.Footer>
    </a>
</Card.Root>

<script>
import {ArrowRightIcon} from '@lucide/svelte'

import * as Card from '$ui/card/index.js'

export let icon
export let title
export let description
export let link

const Icon = icon
</script>
