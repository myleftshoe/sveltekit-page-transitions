<script>
    import { beforeNavigate } from '$app/navigation'
    import { back, transition as storeTransition } from './store'

    export let transition = $storeTransition
    $storeTransition = transition

    let popped = false

    beforeNavigate(({ to }) => {
        $back = popped || to.url.pathname === '/' || to.url.pathname === '/home'
        popped = false
    })
</script>

<svelte:window on:popstate={() => (popped = true)} />

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
