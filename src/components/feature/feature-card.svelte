<Card.Root
    class="group from-background to-muted/50 relative overflow-hidden border-none bg-gradient-to-br shadow-md transition-all duration-300 hover:shadow-xl"
>
    <div
        class="bg-primary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></div>
    <a href={link} target="_blank" rel="noopener noreferrer" class="block">
        <Card.Header class="space-y-2">
            <div
                class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full p-2 transition-transform duration-300 group-hover:scale-110"
            >
                <Icon class="text-primary h-6 w-6" />
            </div>
            <Card.Title
                class="group-hover:text-primary text-xl font-bold transition-colors duration-300"
                >{title}</Card.Title
            >
        </Card.Header>
        <Card.Content>
            <p
                class="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300"
            >
                {description}
            </p>
        </Card.Content>
        <Card.Footer class="pt-0 pb-4">
            <span
                class="text-primary flex translate-x-2 transform items-center text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
                Learn more <ArrowRightIcon class="ml-1 h-4 w-4" />
            </span>
        </Card.Footer>
    </a>
</Card.Root>

<script>
import {ArrowRightIcon} from 'lucide-svelte'

import * as Card from '$ui/card/index.js'

let {icon, title, description, link} = $props()

const Icon = icon
</script>
