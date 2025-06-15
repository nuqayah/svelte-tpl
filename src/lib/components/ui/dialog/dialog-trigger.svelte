<DialogPrimitive.Trigger bind:ref data-slot="dialog-trigger" {...restProps} />

<script>
import {Dialog as DialogPrimitive} from 'bits-ui'

let {ref = $bindable(null), ...restProps} = $props()
</script>
