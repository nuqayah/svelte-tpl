<div
    bind:this={ref}
    data-slot="card-title"
    class={cn('leading-none font-semibold', className)}
    {...restProps}
>
    {@render children?.()}
</div>

<script>
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, children, ...restProps} = $props()
</script>
