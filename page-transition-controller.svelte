<script>
    import { onMount } from 'svelte'
    import { beforeNavigate, goto } from '$app/navigation'
    import { back, transition as storeTransition } from './store'

    export let transition = $storeTransition
    $storeTransition = transition

    let rootPaths = ['/', '/home']
    onMount(() => {
        rootPaths = rootPaths.map((path) => `${window.location.pathname}${path.slice(1)}`)
    })

    let popped = false
    const navHistory = []

    const isInStandaloneMode = () =>
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone ||
        document.referrer.includes('android-app://')

    beforeNavigate(({ to, from, type, cancel }) => {
        let pathname = to?.url?.pathname || rootPaths[0]
        if (isInStandaloneMode()) {
            if (type === 'link') {
                cancel()
                if (pathname === from.url.pathname) {
                    pathname = navHistory.pop() || rootPaths[0]
                    popped = true
                }
                goto(pathname, { replaceState: true })
                return
            }
            if (!popped) navHistory.push(from.url.pathname)
        }
        $back = popped || rootPaths.includes(pathname)
        popped = false
    })

    function handlePopstate() {
        if (!isInStandaloneMode()) popped = true
    }
</script>

<svelte:window on:popstate={handlePopstate} />

<div>
    <slot />
</div>

<style>
    div {
        display: grid;
        height: 100dvh;
        overflow: hidden;
        grid-template: 'page' 1fr;
    }
</style>
