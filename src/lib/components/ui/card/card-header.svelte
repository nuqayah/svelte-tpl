<div
    bind:this={ref}
    data-slot="card-header"
    class={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
    )}
    {...restProps}
>
    {@render children?.()}
</div>

<script>
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, children, ...restProps} = $props()
</script>
