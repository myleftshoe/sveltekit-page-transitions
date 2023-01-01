<script>
    import { setContext } from 'svelte'
    import { beforeNavigate, afterNavigate } from '$app/navigation'
    import { back, transition as storeTransition } from './store'

    export let transition = $storeTransition
    $storeTransition = transition
    setContext('transition', storeTransition)

    let updateBack = true
    function setBack(condition = false) {
        if (!updateBack) return
        updateBack = false
        $back = condition
    }

    beforeNavigate(({ to }) => {
        setBack(to.url.pathname === '/' || to.url.pathname === '/home')
    })

    afterNavigate(() => {
        updateBack = true
    })

    function popState(e) {
        setBack(true)
    }
</script>

<svelte:window on:popstate={popState} />

<div>
    <slot />
</div>

<style>
    div {
        display: grid;
        height: 100vh;
        overflow: hidden;
        grid-template: 'page' 1fr;
    }
</style>
