<script>
    import { back, transition } from './store'

    $: ({ inFunc, inOptions, outFunc, outOptions } = $transition($back))
</script>

<div in:inFunc={inOptions} out:outFunc={outOptions} style="--z: {Number($back)}">
    <slot />
</div>

<style>
    div {
        grid-area: page;
        width: 100%;
        height: 100%;
    }
    div:first-child {
        z-index: var(--z);
    }
</style>
