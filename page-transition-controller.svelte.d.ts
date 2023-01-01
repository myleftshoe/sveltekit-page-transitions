/** @typedef {typeof __propDef.props}  PageTransitionControllerProps */
/** @typedef {typeof __propDef.events}  PageTransitionControllerEvents */
/** @typedef {typeof __propDef.slots}  PageTransitionControllerSlots */
export default class PageTransitionController extends SvelteComponentTyped<{
    transition?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PageTransitionControllerProps = typeof __propDef.props;
export type PageTransitionControllerEvents = typeof __propDef.events;
export type PageTransitionControllerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        transition?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
