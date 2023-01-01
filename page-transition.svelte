<script>
    import { getContext } from 'svelte'
    import { afterUpdate, beforeUpdate } from 'svelte'
    import { back } from './store'
    import { parallax as defaultTransition } from './transitions'

    export let gridArea = 'main'
    const transition = getContext('transition' || defaultTransition)

    let ref
    let inFunc, inOptions
    let outFunc, outOptions

    beforeUpdate(() => {
        ;({ inFunc, inOptions } = $transition($back))
    })

    afterUpdate(() => {
        ;({ outFunc, outOptions } = $transition($back))
    })

    function handleOutrostart() {
        ref.style.zIndex = $back ? 1 : -1
    }
</script>

<div
    bind:this={ref}
    in:inFunc={inOptions}
    out:outFunc={outOptions}
    on:outrostart={handleOutrostart}
    style="grid-area: {gridArea}"
>
    <slot />
</div>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>
