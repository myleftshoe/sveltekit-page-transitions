<script>
    import { beforeNavigate, afterNavigate } from '$app/navigation'
    import { back, transition as storeTransition } from './store'

    export let transition = $storeTransition
    $storeTransition = transition

    let updateBack = true
    function setBack(condition = false) {
        if (!updateBack) return
        updateBack = false
        $back = condition
    }

    beforeNavigate(({ to }) => {
        setBack(to.url.pathname === '/' || to.url.pathname === '/home')
        ref.firstElementChild.style.zIndex = $back ? 1 : 0
    })

    afterNavigate(() => {
        updateBack = true
    })

    function popState(e) {
        setBack(true)
    }

    let ref
</script>

<svelte:window on:popstate={popState} />

<div bind:this={ref}>
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
