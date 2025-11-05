import type { Config } from '../types/index.d'

import { addImports, addServerImports, addTemplate, defineNuxtModule } from '@nuxt/kit'

import { runDiscovery } from '../index'
import { augmentClient } from '../templates/client'

export interface ModuleOptions extends Config {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'discofetch',
    configKey: 'discofetch',
  },

  setup: async (options, nuxt) => {
    await runDiscovery({
      ...options,

      outputDir: `${nuxt.options.buildDir}/discofetch`,
    })

    addTemplate({
      filename: 'discofetch/index.ts',
      getContents: () => augmentClient({
        baseUrl: options.baseUrl,
        headers: options.headers,
        logger: options.logger,
      }),
      write: true,
    })

    const importFile = `${nuxt.options.buildDir}/discofetch/index.ts`

    addServerImports([
      {
        from: importFile,
        name: 'dfetch',
      },
      {
        from: importFile,
        name: 'Dfetch',
        type: true,
      },
      {
        from: importFile,
        name: 'DfetchPaths',
        type: true,
      },
      {
        from: importFile,
        name: 'DfetchComponents',
        type: true,
      },
    ])

    if (options.public) {
      addImports([
        {
          from: importFile,
          name: 'dfetch',
        },
        {
          from: importFile,
          name: 'Dfetch',
          type: true,
        },
        {
          from: importFile,
          name: 'DfetchPaths',
          type: true,
        },
        {
          from: importFile,
          name: 'DfetchComponents',
          type: true,
        },
      ])
    }
  },
})
