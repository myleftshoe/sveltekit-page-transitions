import { writable } from 'svelte/store'
import { parallax } from '$lib'

export const back = writable(false)
export const transition = writable(parallax)