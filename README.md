# sveltekit-page-transitions

[Demo](https://konsta.vercel.app)

## Install

```
npm -i sveltekit-page-transitions
```

### Usage

`+layout.svelte`
```diff
<script>
    import '../app.css'
    import { App } from 'konsta/svelte'
+   import { PageTransitionController, cover } from 'sveltekit-page-transitions'
</script>

<App theme="ios" safeAreas>
+   <PageTransitionController transition={cover}> 
        <slot />
+   </PageTransitionController>
</App>
```

`+page.svelte (all top level pages that inherit from the layout)`
```diff
<script>
    import { Page } from 'konsta/svelte'
+   import { PageTransition } from 'sveltekit-page-transitions'
</script>
 
+<PageTransition>
    <Page>
        /* Page content goes here */
    </Page>
+</PageTransition>
```
