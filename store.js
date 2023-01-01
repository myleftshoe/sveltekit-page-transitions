import { writable } from 'svelte/store'
import { parallax } from './transitions.js'

export const back = writable(false)
export const transition = writable(parallax)