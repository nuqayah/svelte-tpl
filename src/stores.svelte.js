import {debounce} from 'components/src/util.js'
import * as kv from 'idb-keyval'
import {writable} from 'svelte/store'

export const appstate = writable({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
})

export const session = writable({
    loaded: false,
})
;(async function init() {
    const appstate_idb = await kv.get('appstate')
    if (appstate_idb) appstate.set(appstate_idb)

    session.update(v => ({...v, loaded: true}))

    appstate.subscribe(state => {
        document.documentElement.classList.toggle('dark', state.theme === 'dark')
    })

    appstate.subscribe(
        debounce(data => {
            kv.set('appstate', data)
        }, 200),
    )
})()
