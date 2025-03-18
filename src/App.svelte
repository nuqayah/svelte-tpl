<main>
    <Component params={route.params} />
    {#if is404}
        <div class="flex h-screen flex-col items-center justify-center">
            <h1>Page not found</h1>
            <a class="block" href="/">Home</a>
        </div>
    {/if}
</main>

<script module>
import navaid from 'navaid'

// prettier-ignore
/** @type {Array<[string, Promise<any>]>} */
const routes = [
    ['/', import('./Home.svelte')],
]
let Component = $state()
let is404 = $state(false)

export const router = navaid('/', async uri => {
    is404 = true
    Component = null
    Object.assign(route, {path: uri, params: null})
})
export const route = $state({path: location.pathname, params: null})

for (const [path, cmp_] of routes) {
    router.on(path, params => {
        is404 = false
        document.startViewTransition(async () => {
            const {default: cmp, ...exports} = await cmp_

            if (exports?.validate_params && !(await exports.validate_params(params))) {
                router.route('/')
                return
            }

            Component = cmp
            Object.assign(route, {path: location.pathname, params})
        })
    })
}

router.listen()
</script>

<script>
setContext('router', router)
</script>
