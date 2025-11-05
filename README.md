# 🪩 Discofetch

Discofetch is a fetch client that automatically discovers and generates types
for your API requests by probing the endpoints and analyzing the responses.

## Usage

### Nuxt

1. Install the module:

```bash
npm install discofetch
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['discofetch/nuxt'],
})
```

2. Configure the module:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  discofetch: {
    baseUrl: 'https://jsonplaceholder.typicode.com',

    probes: {
        get: {
            '/todos/{id}': {
                params: { id: 3 },
            } 
        },
    },
  },
})
```

3. Use `dfetch` anywhere in your components or pages:

```html
<script setup lang="ts">
const { data } = await dfetch.GET('/todos/{id}', {
  params: {
    path: {
      id: 1,
    },
  },
})

console.log(data.title) // Type: "string"
</script>
```

### Vite

Coming soon...

## 📜 License

Published under the [MIT License](https://github.com/freb97/discofetch/tree/main/LICENSE).

[github-actions-src]: https://github.com/freb97/discofetch/actions/workflows/test.yml/badge.svg
[github-actions-href]: https://github.com/freb97/discofetch/actions

[npm-version-src]: https://img.shields.io/npm/v/discofetch/latest.svg?style=flat&colorA=18181B&colorB=31C553
[npm-version-href]: https://npmjs.com/package/discofetch

[npm-last-update-src]: https://img.shields.io/npm/last-update/discofetch.svg?style=flat&colorA=18181B&colorB=31C553
[npm-last-update-href]: https://npmjs.com/package/discofetch

[license-src]: https://img.shields.io/github/license/freb97/discofetch.svg?style=flat&colorA=18181B&colorB=31C553
[license-href]: https://github.com/freb97/discofetch/tree/main/LICENSE
