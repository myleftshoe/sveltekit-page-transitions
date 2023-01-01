import { fade as _fade, scale } from 'svelte/transition'
import { fly } from './svelte-transition-modified'

export function none() {
    return {
        inFunc: () => { },
        inOptions: {},
        outFunc: () => { },
        outOptions: {},
    }
}

export function fade(back = false, duration = 500) {
    return {
        inFunc: _fade,
        inOptions: { duration },
        outFunc: _fade,
        outOptions: { duration },
    }
}

export function cover(back = false, duration = 450) {
    return back ? {
        inFunc: scale,
        inOptions: { start: 0.75, opacity: 1, duration },
        outFunc: fly,
        outOptions: { x: ' 100%', opacity: 1, duration },
    } : {
        inFunc: fly,
        inOptions: { x: '100%', opacity: 1, duration },
        outFunc: scale,
        outOptions: { start: 0.75, opacity: 1, duration },
    }
}

export function coverV(back = false, duration = 450) {
    return back ? {
        inFunc: scale,
        inOptions: { start: 0.75, opacity: 1, duration },
        outFunc: fly,
        outOptions: { y: ' 100%', opacity: 1, duration },
    } : {
        inFunc: fly,
        inOptions: { y: '100%', opacity: 1, duration },
        outFunc: scale,
        outOptions: { start: 0.75, opacity: 1, duration },
    }
}

export function push(back = false, duration = 500) {
    return back ? {
        inFunc: fly,
        inOptions: { x: '-100%', opacity: 1, duration },
        outFunc: fly,
        outOptions: { x: '100%', opacity: 1, duration },
    } : {
        inFunc: fly,
        inOptions: { x: '100%', opacity: 1, duration },
        outFunc: fly,
        outOptions: { x: '-100%', opacity: 1, duration },
    }
}

export function parallax(back = false, duration = 450) {
    return back ? {
        inFunc: fly,
        inOptions: { x: '-20%', opacity: 1, duration },
        outFunc: fly,
        outOptions: { x: '100%', opacity: 1, duration },
    } : {
        inFunc: fly,
        inOptions: { x: '100%', opacity: 1, duration },
        outFunc: fly,
        outOptions: { x: '-20%', opacity: 1, duration },
    }
}

export const ios = parallax

export function android(back = false, duration = 250) {
    return back ? {
        inFunc: fly,
        inOptions: {},
        outFunc: fly,
        outOptions: { y: 56, duration },
    } : {
        inFunc: fly,
        inOptions: { y: 56, duration },
        outFunc: fly,
        outOptions: { delay: duration, duration: 0 },
    }
}
