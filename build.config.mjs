import { defineBuildConfig } from 'obuild/config'

export default defineBuildConfig({
  entries: [
    {
      type: 'bundle',
      input: ['./src/index.ts'],
      dts: true,
    },

    {
      type: 'bundle',
      input: ['./src/adapters/nuxt.ts'],
      dts: true,
    },

    {
      type: 'bundle',
      input: ['./src/adapters/vite.ts'],
      dts: true,
    },
  ],
})
