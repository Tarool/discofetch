import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,

  entries: [
    'src/module.ts',

    {
      builder: 'mkdist',
      input: 'src/client',
      outDir: 'dist/client',
    },
  ],
})
